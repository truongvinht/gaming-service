import bcrypt from 'bcrypt';
import Model from '../../../../models/User';
import mongoConnector from '../../../../utils/mongoConnector';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    const { body } = req;

    // validation req username and pwd
    // eslint-disable-next-line no-prototype-builtins
    if (!body.hasOwnProperty('username') || !body.hasOwnProperty('password')) {
      res.status(400).json();
      return;
    }

    const { username } = body;

    try {
      await mongoConnector();
      const user = await Model.findOne({ username });
      if (!user) {
        // user not found
        res.status(400).json();
      } else if (!user.password) {
        res.status(403).json();
      } else {
        const isMatch = await bcrypt.compare(body.password, user.password);
        if (!isMatch) {
          // password incorrect
          res.status(401).json();
        } else {
          res.status(200).json({ user });
        }
      }
    } catch (error) {
      res.status(401).json(JSON.stringify(error));
    }
  } else {
    // api is only for validate user
    res.status(405).json();
  }
}
