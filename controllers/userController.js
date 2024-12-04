const User = require("../modules/user");  // Assurez-vous que le chemin est correct
const jwt = require("jsonwebtoken");

// Inscription d'un nouvel utilisateur
exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Connexion d'un utilisateur existant
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

        // Génération d'un token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Connexion réussie", token });
    } catch (error) {
        res.status(500).json({ message: "Erreur interne du serveur", error: error.message });
    }
};

// Récupérer le profil de l'utilisateur connecté
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur interne du serveur", error: error.message });
    }
};

// Middleware pour vérifier le token JWT
exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Accès interdit" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attache l'utilisateur au req
        next();
    } catch (error) {
        res.status(401).json({ message: "Token invalide ou expiré" });
    }
};
