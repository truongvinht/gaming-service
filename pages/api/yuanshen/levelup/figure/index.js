import { findAllHandler } from '../../../../../utils/mongoHandler';
import Model from '../../../../../models/Levelup';

export default async function handler(req, res) {
  await findAllHandler(Model, req, res);
}
