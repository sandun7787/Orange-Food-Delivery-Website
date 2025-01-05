import express from "express";
import cors from "cors";
import {connectDb} from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js";

// App configuration
const app = express();
const port = 4000; // Corrected port number

// Middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDb();


// api endpoints
app.use("/api/food",foodRouter)
app.use("/image",express.static('uploads'))

// Routes
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
