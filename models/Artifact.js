/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import Dungeon from './Dungeon';

/* ArtifactSchema will correspond to a collection in your MongoDB database. */
const ArtifactSchema = new mongoose.Schema({
  name: {
    /* artifact name */
    type: String,
    unique: true,
    required: [true, 'Please provide a name for Artifact.'],
  },
  max_rating: {
    /* max rarity */
    type: Number,
    default: 5,
  },
  one_set: {
    /* single set description */
    type: String,
  },
  two_set: {
    /* two set description */
    type: String,
  },
  four_set: {
    /* four set description */
    type: String,
  },
  dungeon: {
    /* ref id dungeon */
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dungeon',
  },
  image_url: {
    /* Url to artifact logo */
    type: String,
  },
});

export default mongoose.models.Artifact ||
  mongoose.model('Artifact', ArtifactSchema);
