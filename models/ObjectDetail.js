/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import Talent from './Talent';
import Location from './Location';

/* ObjectDetailSchema will correspond to a collection in your MongoDB database. */
const ObjectDetailSchema = new mongoose.Schema({
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
  },
  birthday: {
    /* character birthday */
    type: String,
  },
  material: {
    /* material for level up */
    type: String,
  },
  material_url: {
    /* logo for material  */
    type: String,
  },
  talent: {
    /* required talent */
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Talent',
  },
  weekly_drop: {
    /* weekly boss id */
    type: String,
  },
});

export default mongoose.models.ObjectDetail ||
  mongoose.model('ObjectDetail', ObjectDetailSchema);
