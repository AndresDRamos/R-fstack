import { Router } from "express";
import {
  getMachines,
  createMachine,
  readMachine,
  updateMachine,
  deleteMachine,
} from "../controllers/machines.controller.js";

const router = Router();

router.get("/maquinas", getMachines);
router.post("/maquinas", createMachine);
router.get("/maquinas/:id", readMachine);
router.put("/maquinas/:id", updateMachine);
router.delete("/maquinas/:id", deleteMachine);

export default router;
