import express from "express";
import cors from "cors";
import morgan from "morgan";

import productRoutes from "./routes/products.routes.js";
const app = express();

//settings
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/users", productRoutes);

export default app;
