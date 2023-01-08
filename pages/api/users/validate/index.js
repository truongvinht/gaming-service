import Model from "../../../../models/User";
import bcrypt from "bcrypt";
import mongoConnector from "../../../../utils/mongoConnector";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    const body = req.body;

    // validation req username and pwd
    if (!body.hasOwnProperty("username") || !body.hasOwnProperty("password")) {
      res.status(400).json();
      return;
    }

    const username = body.username;

    try {
      await mongoConnector();
      const user = await Model.findOne({ username: username });
      if (!user) {
        // user not found
        res.status(400).json();
      } else {
        if (!user.password) {
          res.status(403).json();
        } else {
          const password = body.password;
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            // password incorrect
            res.status(401).json();
          } else {
            res.status(200).json({ user });
          }
        }
      }
    } catch (error) {
      console.log(error);
      res.status(401).json(JSON.stringify(error));
    }
  } else {
    // api is only for validate user
    res.status(405).json();
  }
}
