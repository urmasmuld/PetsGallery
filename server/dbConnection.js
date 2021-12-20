const mongoose = require("mongoose");
const { Pets } = require("./models/PetsSchema");
const { Users } = require("./models/UsersSchema");

//Connecting to database
mongoose.connect(
    "mongodb+srv://urmas:Kammkala123@cluster0.0scmk.mongodb.net/PetsGallery?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);
const Schema = mongoose.Schema;

module.exports = {
    Todos,
    Users
  };