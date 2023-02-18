import mongoConnector from '../../../../../utils/mongoConnector';
import User from '../../../../../models/User';
import Model from '../../../../../models/GenshinPlayer';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method === 'GET') {
    try {
      await mongoConnector();
      const u = await User.findOne({ discord_id: id });
      const users = await Model.findOne({ player: u._id })
        .populate(
          'data',
          '-_id -type -rating -element -wp_type -__v -obtained_from -details'
        )
        .select('-_id -player -__v');

      if (!users) {
        return res.status(404).json();
      }

      const choices = users.data;
      const index = Math.floor(Math.random() * Math.floor(choices.length));

      res.status(200).json(choices[index]);
    } catch (error) {
      res.status(500).json();
    }
  } else {
    res.status(500).json();
  }
}
