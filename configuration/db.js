const mongoose = require('mongoose');

// Charger la configuration depuis .env
const url = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(url); // Aucune option supplémentaire nécessaire
        console.log("Connexion à la base de données réussie");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB:", error.message);
        process.exit(1); // Arrêt de l'application si la connexion échoue
    }
};

module.exports = connectDB;
