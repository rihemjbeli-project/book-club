const mongoose = require("mongoose");

const bookschema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }, // Correction du mot "déscription"
    auteur: { type: String, required: true },
    book_name: { type: String, required: true },
    image: { type: String, required: true },
    prix: { type: Number, required: true }, // Correction du type "Number"
});

module.exports = mongoose.model("Book", bookschema); // Correction de l'export
