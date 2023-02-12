import mongoose from 'mongoose'
import Dungeon from './Dungeon'

/* WeaponMaterialSchema will correspond to a collection in your MongoDB database. */
const WeaponMaterialSchema = new mongoose.Schema({
  name: {
    /* weapon material name*/
    type: String,
    unique: true,
    required: [true, 'Please provide a name for Material.'],
  },
  dungeon: {
      /* ref id dungeon */
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dungeon",
  },
  image_url: {
    /* Url to material logo */
    type: String,
  },
  weekday: {
    /* available on weekday */
    type: [Number],
    default:[]
  }
})

export default mongoose.models.WeaponMaterial || mongoose.model('WeaponMaterial', WeaponMaterialSchema)
