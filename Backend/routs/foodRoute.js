import express from "express";
import multer from "multer"; // For handling file uploads
import { addFood } from "../controllers/foodController.js"; // Correct path

const foodRouter = express.Router(); // Use foodRouter consistently

// Configure Multer to handle file storage and naming
const storage = multer.diskStorage({
  destination: "uploads",  // Ensure this directory exists or is created
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);  // Create a unique filename using timestamp
  }
});

// Multer setup for handling file uploads
const upload = multer({
  storage: storage
});

// Define route to add food with file upload
foodRouter.post('/addFood', upload.single('image'), addFood);  // Use foodRouter

export default foodRouter;
