import mongoose from "mongoose";
import PullObject from "./PullObject";
import Talent from "./Talent";

/* CharacterDetailSchema will correspond to a collection in your MongoDB database. */
const CharacterDetailSchema = new mongoose.Schema({
  character: {
    /* related character id */
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please provide a character."],
    ref: "PullObject",
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
    ref: "Talent",
  },
  weekly_drop: {
    /* weekly boss id */
    type: String,
  },
});

export default mongoose.models.CharacterDetail || mongoose.model('CharacterDetail', CharacterDetailSchema)
