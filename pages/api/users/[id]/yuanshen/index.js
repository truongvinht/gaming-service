import { findAllHandler } from '../../../../../utils/mongoHandler';
import Model from '../../../../../models/GenshinPlayer';
import mongoConnector from '../../../../../utils/mongoConnector';
import PullObject from '../../../../../models/PullObject';


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
    await findAllHandler(Model, req, res);
  } else if (method === 'GET') {
    const playerId = ObjectId(id);

    try {
      await mongoConnector();
      const player = await Model.findOne({ player:playerId }).populate('data player');

      // user not found
      if (!player) {
        return res.status(400).json({ success: false });
      }

      // ids
      const { data } = await Model.findOne({ player: playerId });

      // user data was found
      // fetch all characters which is not related
      const missing = await PullObject.find({ type: 'Figur', _id: { $nin: data } }).sort({name: 'asc'});
      res.status(200).json({ success: true, data: player, other: missing });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    await findAllHandler(Model, req, res);
  }
}
