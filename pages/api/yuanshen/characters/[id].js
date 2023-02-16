import { findByIdHandler } from '../../../../utils/mongoHandler';
import Model from '../../../../models/PullObject';

export default async function handler(req, res) {
  await findByIdHandler(Model, req, res);
}
