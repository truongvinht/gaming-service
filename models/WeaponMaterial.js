import mongoose from 'mongoose'

/* WeaponMaterialSchema will correspond to a collection in your MongoDB database. */
const WeaponMaterialSchema = new mongoose.Schema({
  name: {
    /* weapon material name*/
    type: String,
    unique: true,
    required: [true, 'Please provide a name for Material.'],
  },
  dungeon_id: {
    /* weapon material dungeon id */
    type: String,
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

export default mongoose.models.WeaponMaterialSchema || mongoose.model('WeaponMaterial', WeaponMaterialSchema)
