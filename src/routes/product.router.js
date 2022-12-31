import { Router } from "express";
import { getAll, create, update } from '../controllers/product.controller.js'

const router = Router()

router.get('/', getAll)
router.post('/cadastrar', create)
router.patch('/atualizar/:id', update)


export default router