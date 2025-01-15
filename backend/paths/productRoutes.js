import express from 'express'
const router = express.Router()
import {getProducts, getProductById, deleteProduct,createProduct,updateProduct} from '../controlers/productControler.js'
import { protect,admin } from '../API/authMiddleware.js'


router.route('/').get(getProducts).post(createProduct)


router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)



export default router