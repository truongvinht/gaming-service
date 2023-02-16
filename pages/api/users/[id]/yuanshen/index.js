import { findAllHandler } from '../../../../../utils/mongoHandler';
import Model from '../../../../../models/GenshinPlayer';
import mongoConnector from '../../../../../utils/mongoConnector';

const {
  Types: { ObjectId },
} = require('mongoose');

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  // create a genshin player
  if (method === 'POST') {
    // res.status(500).json({ success: false });
    await findAllHandler(Model, req, res);
  } else if (method === 'GET') {
    const player = ObjectId(id);

    try {
      await mongoConnector();
      const user = await Model.findOne({ player }).populate('data player');

      if (!user) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    await findAllHandler(Model, req, res);
  }
}
