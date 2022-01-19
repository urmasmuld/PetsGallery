const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = {
  Users,
};