import { Router } from "express";
import { getInformes, readInforme } from "../controllers/PBI.controller.js";

const router = Router();

router.get("/informes", getInformes);
router.get("/informes/:id", readInforme);

export default router;
