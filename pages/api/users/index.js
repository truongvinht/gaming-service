import {findAllHandler} from '../../../utils/mongoHandler'
import Model from '../../../models/User'

export default async function handler(req, res) {
    await findAllHandler(Model, req, res)
}
