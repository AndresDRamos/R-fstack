import { Router } from "express";
import { routes } from "../controllers/main.controller.js";

const router = Router();

router.get("/routes", routes);

export default router;
