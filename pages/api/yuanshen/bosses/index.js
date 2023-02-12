import {findAllHandler} from '../../../../utils/mongoHandler'
import Model from '../../../../models/Boss'

export default async function handler(req, res) {
    await findAllHandler(Model, req, res, {}, "location")
}
