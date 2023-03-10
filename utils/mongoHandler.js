import mongoConnector from './mongoConnector';

export const findAllObjectsHandler = async (
  model,
  req,
  res,
  arg = {},
  populate = null,
  populateArgs = ''
) => {
  const { method } = req;

  await mongoConnector();

  switch (method) {
    case 'GET':
      try {
        let objs;
        if (populate == null) {
          objs = await model.find(arg);
        } else {
          objs = await model.find(arg).populate(populate, populateArgs);
        }

        res.status(200).json(objs);
      } catch (error) {
        res.status(500).json();
      }
      break;
    case 'POST':
      try {
        const obj = await model.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json(obj);
      } catch (error) {
        res.status(500).json();
      }
      break;
    default:
      res.status(500).json();
      break;
  }
};

export const findAllHandler = async (
  model,
  req,
  res,
  arg = {},
  populate = null
) => {
  const { method } = req;

  await mongoConnector();

  switch (method) {
    case 'GET':
      try {
        let objs;
        if (populate == null) {
          objs = await model.find(arg);
        } else {
          objs = await model.find(arg).populate(populate);
        }

        res.status(200).json({ success: true, data: objs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const obj = await model.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: obj });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export const findByIdHandler = async (model, req, res) => {
  const {
    query: { id },
    method,
  } = req;

  await mongoConnector();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const obj = await model.findById(id);
        if (!obj) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: obj });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const obj = await model.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!obj) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: obj });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedObject = await model.deleteOne({ _id: id });
        if (!deletedObject) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export const findInValueHandler = async (
  model,
  req,
  res,
  attr,
  populate = null
) => {
  const {
    query: { id },
    method,
  } = req;

  await mongoConnector();

  switch (method) {
    case 'GET':
      try {
        const map = {};
        map[attr] = { $in: [id] };

        let obj;
        if (populate == null) {
          obj = await model.find(map);
        } else {
          obj = await model.find(map).populate(populate);
        }

        if (!obj) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: obj });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
