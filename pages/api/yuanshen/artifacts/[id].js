import apiHandler from '../../../../utils/findByIdHandler'
import Model from '../../../../models/Artifact'

/**
 * @api {get} /api/yuanshen/artifacts/:id Request Artifact information
 * @apiName GetArtifact
 * @apiGroup Artifact
 *
 * @apiParam {Number} id Artifact unique ID.
 *
 * @apiSuccess {Object} data Artifact informtion.
 * @apiSuccess {Boolean} success Artifact is found.
 */
export default async function handler(req, res) {
    await apiHandler(Model, req, res)
}
