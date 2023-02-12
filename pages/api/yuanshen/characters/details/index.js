import mongoConnector from "../../../../../utils/mongoConnector";
import {findAllHandler} from '../../../../../utils/mongoHandler'
import Model from '../../../../../models/CharacterDetail'

export default async function handler(req, res) {
    const { method } = req;

  
    switch (method) {
      case "GET":
        await mongoConnector();
        try {
            const objs = await Model.find().populate('character talent');
            res.status(200).json({ success: true, data: objs });
        } catch (error) {
            console.log(error);
          res.status(400).json({ success: false });
        }
        break;
      default:
        await findAllHandler(Model, req, res);
        break;
    }
}
