import connectDB from "./db/connect.js";
import Product from "./models/products.js";
import dotenv from "dotenv";
// import ProductJson from './product.json'
import fs from "fs";

const ProductJson = JSON.parse(fs.readFileSync("./product.json", "utf-8"));

dotenv.config();

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany()
    await Product.create(ProductJson);

    console.log("Success! Data added");

  }catch (err) {
    console.error("Error:", err.message);
  }
};

start();
