import apiHandler from '../../../../utils/findByIdHandler'
import Model from '../../../../models/PullObject'

export default async function handler(req, res) {
    await apiHandler(Model, req, res)
}
