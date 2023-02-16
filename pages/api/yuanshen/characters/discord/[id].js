import mongoConnector from '../../../../../utils/mongoConnector';
import Model from '../../../../../models/GenshinPlayer';
import User from '../../../../../models/User';

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    await mongoConnector();

    // 700ms

    const u = await User.findOne({ discord_id: id });
    const users = await Model.findOne({ player: u._id })
      .populate(
        'data',
        '-_id -type -rating -image_url -element -wp_type -__v -obtained_from'
      )
      .select('-_id -player -__v');

    if (!users) {
      return res.status(400).json({ success: false });
    }

    const list = users.data.map((entry) => entry.name);
    res.status(200).json({ success: true, data: list });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
