const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  name: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, SECRET);
    return token;
};

const Users = mongoose.model("Users", UserSchema);

module.exports = {
  Users,
};

