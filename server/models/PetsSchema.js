
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

PetsSchema = new Schema({
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

const Pets = mongoose.model("Pets", PetsSchema);

module.exports = {
    Pets,
    
};