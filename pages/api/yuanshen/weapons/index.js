import {findAllHandler} from '../../../../utils/mongoHandler'
import Model from '../../../../models/PullObject'

export default async function handler(req, res) {
    await findAllHandler(Model, req, res, {type: 'Waffe'});
}
