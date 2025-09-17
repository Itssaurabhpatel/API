import express from "express";
import productsRoutes from './routes/products.js'
import connectDB  from "./db/connect.js";
import dotenv from "dotenv";


// load environment variables
dotenv.config();

// connect to DB
connectDB(process.env.MONGODB_URL);

const app = express();
const PORT = process.env.PORT || 2500;


app.get("/", (req, res) => {
  res.send("<h1>Hello from Express App</h1>");
});

// middleware
app.use('/api/products',productsRoutes)


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

