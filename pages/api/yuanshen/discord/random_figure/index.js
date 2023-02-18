import mongoConnector from '../../../../../utils/mongoConnector';
import Model from '../../../../../models/PullObject';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    try {
      await mongoConnector();
      const figures = await Model.find({ type: 'Figur' }).select('-_id name image_url');

      if (!figures) {
        return res.status(404).json();
      }

      const choices = figures;
      const index = Math.floor(Math.random() * Math.floor(choices.length));

      res.status(200).json(choices[index]);
    } catch (error) {
      res.status(500).json();
    }
  } else {
    res.status(500).json();
  }
}
