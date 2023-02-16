/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import Location from './Location';

/* BossSchema will correspond to a collection in your MongoDB database. */
const BossSchema = new mongoose.Schema({
  name: {
    /* boss name */
    type: String,
    unique: true,
    required: [true, 'Please provide a name for Boss.'],
  },
  description: {
    /* boss description */
    type: String,
  },
  type: {
    /* boss type */
    type: String,
  },
  resin: {
    /* boss resin cost */
    type: Number,
  },
  location: {
    /* ref location */
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
  },
  image_url: {
    /* Url to boss logo */
    type: String,
  },
});

export default mongoose.models.Boss || mongoose.model('Boss', BossSchema);
