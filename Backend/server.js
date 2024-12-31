import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routs/foodRoute.js"; // Correct import path for food routes

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDb(); // Connect to the database

// API endpoint
app.use("/api/food", foodRouter);

// Default route
app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
