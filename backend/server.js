import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./DBsetting/db.js";
import morgan from "morgan";
import userRoutes from "./paths/userRoutes.js";
import orderRoutes from "./paths/orderRoutes.js";
import productRoutes from "./paths/productRoutes.js";

import { notFound, errorHandler } from "./API/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);


const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is Runn....");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);


