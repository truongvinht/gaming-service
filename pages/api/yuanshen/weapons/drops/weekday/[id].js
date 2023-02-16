import { findInValueHandler } from '../../../../../../utils/mongoHandler';
import Model from '../../../../../../models/WeaponMaterial';

export default async function handler(req, res) {
  await findInValueHandler(Model, req, res, 'weekday', 'dungeon');
}
