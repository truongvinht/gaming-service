import {findAllHandler} from '../../../../../utils/mongoHandler'
import Model from '../../../../../models/WeaponMaterial'

export default async function handler(req, res) {
    await findAllHandler(Model, req, res);
}
