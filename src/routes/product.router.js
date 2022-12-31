import { Router } from "express";
import { getAll, create, update, getByProduct } from '../controllers/product.controller.js'

const router = Router()

router.get('/api/produtos', getAll)
router.get('/api/produtos/detalhes/:id', getByProduct)
router.post('/api/produtos', create)
router.patch('/api/produtos/:id', update)


export default router