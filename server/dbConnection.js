const mongoose = require("mongoose");


//Connecting to database
mongoose.connect(
    "mongodb+srv://urmas:Kammkala123@cluster0.0scmk.mongodb.net/PetsGallery?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);
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

const Pets = mongoose.model("Pets", PetsSchema);

module.exports = {
    Pets,
    
};
