import { Router } from "express";
import { sample_users } from "../data/users.data";

const router = Router();

router.get("/", (req, res) => {
    try {
        res.send();
    } catch (error) {
        res.status(400).send("Page introuvable : " + error);
    }
});

router.get("/users", (req, res) => {
    try {
        res.send(sample_users);
    } catch (error) {
        res.status(400).send("Page introuvable : " + error);
    }
});

export default router;