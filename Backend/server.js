import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";

const app = express();
const port = 4000; // Corrected to a standard port number

app.use(express.json());
app.use(cors());

connectDb();

app.get("/", (req, res) => {
    res.send("API WORKING");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`); // Fixed the template literal
});

//mongodb+srv://sajini2224:1234567890@cluster0.fy4qy.mongodb.net/?