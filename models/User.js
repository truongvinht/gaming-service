import mongoose from "mongoose";

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  username: {
    /* username */
    type: String,
    required: [true, "Please provide username."],
    unique: true
  },
  firstname: {
    /* first name */
    type: String,
    required: [true, "Please provide first name."],
  },
  surname: {
    /* surname */
    type: String,
    required: [true, "Please provide surname."],
  },
  password: {
    /* password */
    type: String,
    default: 'test',
    required: [true, "Please provide a password."],
  },
  image_url: {
    /* Url to user avatar */
    type: String,
  },
  email: {
    /* email name */
    type: String,
  },
  role: {
    /* user role */
    type: String,
    default: 'user',
    required: [true, "Please provide a role."],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
