require("dotenv").config(); // Charger les variables d'environnement

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Utilisation du port depuis .env

const bookroute = require("./routes/bookrouter"); // Routeur de book 
const connectDB = require("./configuration/db"); // Connexion DB
const userRouter = require("./routes/userRouter"); // Ajout du routeur utilisateur
const cors = require("cors");

connectDB(); // Connexion à la base de données

// Middleware pour parser JSON
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// Enregistrer les routeurs
app.use("/api/v1", bookroute);
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
    console.log(`Serveur démarré avec succès sur le port ${port}`);
});
