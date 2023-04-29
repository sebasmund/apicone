import { Router } from "express";
import { methods as pacienteController } from "./../controllers/pacientes.controller";

const router = Router();

router.get("/", pacienteController.getPacientes);
router.get("/:id", pacienteController.getPaciente);
router.post("/", pacienteController.addPaciente);
router.put("/:id", pacienteController.updatePaciente);
router.delete("/:id", pacienteController.deletePaciente);

export default router;
