import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    let name = "Guilherme Rodrigues";
    let age = 18;

    res.json({ name, age });
});

export default router;