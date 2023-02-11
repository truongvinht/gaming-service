import mongoose from "mongoose";

/* LevelupSchema will correspond to a collection in your MongoDB database. */
const LevelupSchema = new mongoose.Schema({
  type: {
    /* type: 0: figure, 1: weapon, 2: talent */
    type: Number,
    required: [true, 'Please provide a type.'],
  },
  level: {
    /* level */
    type: Number,
    required: [true, 'Please provide a level.'],
  },
  experience: {
    /* exp for reaching next level (figure/weapon) */
    type: Number,
    default: 0,
  },
  wp_rarity: {
    /* wp rarity */
    type: Number,
  },
  mora: {
    /* mora lv up cost */
    type: Number,
    default: 0,
  },
  special_count: {
    /* number of special items */
    type: Number,
    default: 0,
  },
  special_rarity: {
    /* rarity lv of special items */
    type: Number,
    default: 0,
  },
  ascension: {
    /* ascension cost */
    type: Number,
    default: 0,
  },
});

export default mongoose.models.Levelup ||
  mongoose.model("Levelup", LevelupSchema);
