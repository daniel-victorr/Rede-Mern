import { Router } from "express";
import { getAll, create, update, getById, erase }  from "../controllers/user.controller.js";
import { validId, validUser } from "../middleware/usuario.middleware.js"

const router = Router()

router.get('/api/usuarios', getAll)
router.delete('/api/usuarios/:id', validId, validUser, erase)
router.get('/api/usuarios/detalhes/:id', validId, validUser, getById)
router.post('/api/usuarios', create)
router.patch('/atualizar/:id', validId, validUser, update)

export default router