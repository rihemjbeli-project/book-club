const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require("../controllers/userController");
const { verifyToken } = require("../controllers/userController");

// Route pour l'inscription
router.post("/register", registerUser);

// Route pour la connexion
router.post("/login", loginUser);

// Route pour obtenir les informations de l'utilisateur connecté
router.get("/profile", verifyToken, getUserProfile);

module.exports = router;
