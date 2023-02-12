import mongoose from 'mongoose'
import Dungeon from './Dungeon';

/* TalentSchema will correspond to a collection in your MongoDB database. */
const TalentSchema = new mongoose.Schema({
  name: {
    /* talent name*/
    type: String,
    unique: true,
    required: [true, 'Please provide a name for Talent.'],
  },
  dungeon: {
    /* ref id dungeon */
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dungeon",
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
