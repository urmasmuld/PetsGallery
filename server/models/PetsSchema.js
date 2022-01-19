const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const PetsSchema = new Schema({
    omanik: { type: String },
    loomaNimi: { type: String },
    liik: { type: String },
    vanus: { type: Number },
    sugu: { type: String },
    v2limus: { type: String },
    iseloom: { type: String },
    pilt: { type: String },
    pilt64: { type: String },
    pilt64_s: { type: String },
    
});

PetsSchema.plugin(mongoosePaginate);

const Pets = mongoose.model("Pets", PetsSchema);

module.exports = {
  Pets,
};