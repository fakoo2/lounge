const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const { Schema } = mongoose; // <-- Add this line

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Listing",
    },
  ],

  //user name and password automatically defined by passport-local-mongoose so no need to define it
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
