import { Router } from "express";
import{createProducts,getProducts}from "../controllers/products.controller.js";

const router = Router();

router.get("/listUsers", getProducts)
router.post("/createUsers", createProducts)

export default router;