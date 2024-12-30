const mongoose = require('mongoose');

// URL directement dans le code (TEMPORAIRE)
const url = "mongodb+srv://rihemjebali:SsURsjjKT8NXQgbs@book.jnoq1.mongodb.net/?retryWrites=true&w=majority&appName=book";

const connectDB = async () => {
    try {
        // Connexion sans options dépréciées
        await mongoose.connect(url);
        console.log("✅ Connexion à la base de données réussie");
    } catch (error) {
        console.error("❌ Erreur de connexion à MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
