import mongoose from 'mongoose'
import User from './User';
import PullObject from './PullObject';

/* GenshinPlayerSchema will correspond to a collection in your MongoDB database. */
const GenshinPlayerSchema = new mongoose.Schema({

    player: {
        /* ref user */
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    data: [{
        /* ref pulls */
        type: mongoose.Schema.Types.ObjectId,
        ref: "PullObject",
    }]
})

export default mongoose.models.GenshinPlayer || mongoose.model('GenshinPlayer', GenshinPlayerSchema)
