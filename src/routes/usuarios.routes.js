import { Router } from "express";
import { methods as usuarioController } from "./../controllers/usuarios.controller";

const router = Router();

router.get("/", usuarioController.getUsuario);
router.get("/:id", usuarioController.getUsuarios);
router.post("/", usuarioController.addUsuario);
router.put("/:id", usuarioController.updateUsuario);
router.delete("/:id", usuarioController.deleteUsario);

export default router;