import express from 'express';
import * as controller from '../controller/apiController.js'

const router = express.Router();    // router 객체 생성

router.get("/get", controller.getFruits)
router.get("/products", controller.getProducts)
router.get("/products", controller.getProductDetail)
router.get("/post", controller.getFormData)

export default router;