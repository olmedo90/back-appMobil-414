import Product from "../models/product.model.js";

export const getProducts = async(req, res)=>{
    try {
        const products = await Product.find({});
        res.json(products);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const createProducts = async(req, res)=>{
    try {
        const { username} = req.body;
        const newProduct = new Product({
          username,
        });
        await newProduct.save();
        res.json(newProduct);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}
