import { Router } from "express";
import { getAll, create, update }  from "../controllers/user.controller.js";
import { validId, validUser } from "../middleware/usuario.middleware.js"

const router = Router()

router.get('/home', getAll)
router.post('/cadastro', create)
router.patch('/atualizar/:id', validId, validUser, update)

export default router