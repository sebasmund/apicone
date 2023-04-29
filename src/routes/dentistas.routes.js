import { Router } from "express";
import { methods as dentistaController } from "./../controllers/dentistas.controller";

const router = Router();

router.get("/", dentistaController.getDentistas);
router.get("/:id", dentistaController.getDentista);
router.post("/", dentistaController.addDentista);
router.put("/:id", dentistaController.updateDentista);
router.delete("/:id", dentistaController.deleteDentista);

export default router;
