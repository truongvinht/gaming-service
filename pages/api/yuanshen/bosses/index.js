import apiHandler from '../../../../utils/findAllHandler'
import Model from '../../../../models/Boss'

export default async function handler(req, res) {
    await apiHandler(Model, req, res)
}
