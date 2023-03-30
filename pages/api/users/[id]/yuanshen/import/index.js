import Model from '../../../../../../models/GenshinPlayer';

import PullObject from '../../../../../../models/PullObject';
import mongoConnector from '../../../../../../utils/mongoConnector';

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
    await mongoConnector();
    // first load every character

    const figures = await PullObject.find({ type: 'Figur' });

    const data = [];

    const player = ObjectId(id);
    const user = await Model.findOne({ player });

    if (!user) {
      return res.status(400).json({ success: false });
    }

    // user was found
    for (const figure of figures) {
      data.push(ObjectId(figure._id));
    }

    const body = { data };

    const obj = await Model.findByIdAndUpdate(user._id, body, {
      new: true,
      runValidators: true,
    });
    if (!obj) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
}
