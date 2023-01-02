import mongoConnector from "./mongoConnector";

export default async function findAllHandler(model, req, res, arg = {}) {
  const { method } = req;

  await mongoConnector();

  switch (method) {
    case "GET":
      try {
        const objs = await model.find(arg);
        res.status(200).json({ success: true, data: objs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const obj = await model.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: obj });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
