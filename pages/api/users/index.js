import bcrypt from 'bcrypt';
import { findAllHandler } from '../../../utils/mongoHandler';
import Model from '../../../models/User';

export default async function handler(req, res) {
  const { method } = req;

  // create a new user
  if (method === 'POST') {
    // copy body obj
    const body = JSON.parse(JSON.stringify(req.body));

    const user = await Model.findOne({ username: body.username });
    if (user) {
      res.status(200).json({ success: false, message: 'already registered' });
      return;
    }

    if (req.body.password == null || req.body.password === undefined) {
      res.status(400).json({ success: false, message: 'invalid password' });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    body.password = hashPass;
    try {
      const obj = await Model.create(body);
      res.status(201).json({ success: true, data: obj });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    await findAllHandler(Model, req, res);
  }
}
