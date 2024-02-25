import { Router } from "express";
import { login, user, signup, menu } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", user);
router.get("/menu", menu);

export default router;
