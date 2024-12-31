import foodModel from "../models/foodModel.js";
import fs from "fs";

// Controller function to add food
const addFood = async (req, res) => {
    try {
        // Extract data from the request body
        const { name, description, price, category } = req.body;

        // Check if a file (image) was uploaded
        let imagePath = null;
        if (req.file) {
            imagePath = req.file.path; // Path where the uploaded image is stored
        }

        // Validate required fields
        if (!name || !description || !price || !category || !imagePath) {
            console.log("Request Body:", req.body); // Logs the text fields
            console.log("Uploaded File:", req.file); // Logs the uploaded file
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new food item
        const newFood = new foodModel({
            name,
            description,
            price,
            image: imagePath, // Save image path to the database
            category,
        });

        // Save the food item to the database
        const savedFood = await newFood.save();

        // Success response
        res.status(201).json({ message: "Food item added successfully", data: savedFood });
    } catch (error) {
        console.error("Error adding food:", error);

        // Handle file cleanup if something fails
        if (req.file && req.file.path) {
            fs.unlink(req.file.path, (err) => {
                if (err) console.error("Failed to delete uploaded file:", err);
            });
        }

        // Error response
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export { addFood };
