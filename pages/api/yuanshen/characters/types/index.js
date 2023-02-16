import mongoConnector from '../../../../../utils/mongoConnector';
import model from '../../../../../models/PullObject';

export default async function handler(req, res) {
  const { method } = req;

  await mongoConnector();

  switch (method) {
    case 'GET':
      try {
        const objs = await model.find({ type: 'Figur' });
        const types = new Set();
        for (const figure of objs) {
          types.add(figure.wp_type);
        }

        res.status(200).json({ success: true, data: Array.from(types) });
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
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
