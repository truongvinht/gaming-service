import mongoose from 'mongoose'
import Location from './Location'

/* DungeonSchema will correspond to a collection in your MongoDB database. */
const DungeonSchema = new mongoose.Schema({
    name: {
        /* dungeon name */
        type: String,
        unique: true,
        required: [true, 'Please provide a name for Dungeon.'],
      },
      location: {
        /* ref location */
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
      },
      image_url: {
        /* Url to dungeon logo */
        type: String,
      }
})

export default mongoose.models.Dungeon || mongoose.model('Dungeon', DungeonSchema)
