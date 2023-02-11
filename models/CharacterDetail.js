import mongoose from 'mongoose'

/* CharacterDetailSchema will correspond to a collection in your MongoDB database. */
const CharacterDetailSchema = new mongoose.Schema({
  character_id: {
    /* related character id */
    type: String,
    required: [true, 'Please provide an id.'],
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
  talent_id: {
    /* required talent */
    type: String
  },
  weekly_drop_id: {
    /* weekly boss id */
    type: String,
  }
})

export default mongoose.models.CharacterDetailSchema || mongoose.model('CharacterDetail', CharacterDetailSchema)
