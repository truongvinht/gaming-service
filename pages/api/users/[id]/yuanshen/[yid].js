import mongoConnector from '../../../../../utils/mongoConnector';
import Model from '../../../../../models/GenshinPlayer';

const {
  Types: { ObjectId },
} = require('mongoose');

export default async function handler(req, res) {
  const {
    query: { id, yid },
    method,
  } = req;

  await mongoConnector();

  switch (method) {
    case 'POST':
      // add new id to list

      const player = ObjectId(id);
      const fid = ObjectId(yid);
      const user = await Model.findOne({ player });

      user.data.push(fid);

      const body = { data: user.data}

      const obj = await Model.findByIdAndUpdate(user._id, body, {
        new: true,
        runValidators: true,
      });
      if (!obj) {
        return res.status(400).json();
      }
      res.status(200).json();
      break;
    case 'DELETE':
      try {
        // only update entry instead of real deletion

        const player = ObjectId(id);
        const user = await Model.findOne({ player });

        const data = [];

        // search for deleting figure
        for (let i = 0; i < user.data.length; i++ ) {
          const figId = user.data[i];
          if (`${yid}` !== `${figId}`) {
            data.push(figId);
          }
        }
        const body = { data };

        const obj = await Model.findByIdAndUpdate(user._id, body, {
          new: true,
          runValidators: true,
        });
        if (!obj) {
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
}
