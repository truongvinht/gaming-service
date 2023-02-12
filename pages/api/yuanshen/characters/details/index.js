import mongoConnector from "../../../../../utils/mongoConnector";
import {findAllHandler} from '../../../../../utils/mongoHandler'
import Model from '../../../../../models/CharacterDetail'

export default async function handler(req, res) {
    const { method } = req;

    await findAllHandler(Model, req, res, {}, "character location talent");
}
