const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  name: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
});


const Users = mongoose.model("Users", UsersSchema);

module.exports = {
  Users,
};

