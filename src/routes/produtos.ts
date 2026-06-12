import express from "express";

const router = express.Router();

const produtos = [
    { id: 1, name: "Teclado", price: 90 },
    { id: 2, name: "Mouse", price: 50 }
];

router.get("/", (req, res) => {
    res.json(produtos || []);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    res.json({ id, name: "teclado xyz", price: 90 });
});

export default router;