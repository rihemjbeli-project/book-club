const express = require('express');
const router = express.Router();
const bookmodules = require("../modules/bookmodules");

// Route POST pour ajouter un livre
router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newbook = new bookmodules(data);
        console.log("Données reçues :", data); // Ajout du log pour voir les données
        await newbook.save();
        res.status(200).json({ message: "Livre ajouté avec succès" });
    } catch (error) {
        console.error("Erreur lors de l'ajout du livre :", error);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
});

// Route GET pour obtenir tous les livres
router.get("/getbook", async (req, res) => {
    let book;
    try {
        book = await bookmodules.find();
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
    }
});

// Route GET pour obtenir un livre par ID
router.get("/getbook/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const book = await bookmodules.findById(id);
        res.status(200).json(book);
    } catch (error) {
        console.log("Erreur lors de la recherche du livre :", error);
    }
});

// Route PUT pour mettre à jour un livre
router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedBook = await bookmodules.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({ message: "Livre mis à jour avec succès", updatedBook });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour", error });
    }
});

// Route DELETE pour supprimer un livre
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await bookmodules.findByIdAndDelete(id);
        res.status(200).json({ message: "Livre supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression", error });
    }
});

module.exports = router;
