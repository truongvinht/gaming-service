import mongoose from 'mongoose'

/* TalentSchema will correspond to a collection in your MongoDB database. */
const TalentSchema = new mongoose.Schema({
  name: {
    /* talent name*/
    type: String,
    unique: true,
    required: [true, 'Please provide a name for Talent.'],
  },
  dungeon_id: {
    /* Talent dungeon id */
    type: String,
  },
  image_url: {
    /* Url to talent logo */
    type: String,
  },
  weekday: {
    /* available on weekday */
    type: [Number],
    default:[]
  }
})

export default mongoose.models.Talent || mongoose.model('Talent', TalentSchema)
