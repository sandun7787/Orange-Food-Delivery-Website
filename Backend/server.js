import express from "express";
import cors from "cors";

// App configuration
const app = express();
const port = 4000; // Corrected port number

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
