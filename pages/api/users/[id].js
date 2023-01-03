import {findByIdHandler} from '../../../utils/mongoHandler'
import Model from '../../../models/User'

/**
 * @api {get} /api/users/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id user unique ID.
 *
 * @apiSuccess {Object} data user informtion.
 * @apiSuccess {Boolean} success User is found.
 */
export default async function handler(req, res) {
    await findByIdHandler(Model, req, res)
}
