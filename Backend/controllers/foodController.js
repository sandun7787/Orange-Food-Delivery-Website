import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food item
const addFood = async (req, res) => {
  let image_filename = req.file?.filename; // Optional chaining to avoid errors if req.file is undefined

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food added successfully" });
  } catch (error) {
    console.error("Error saving food:", error);
    res.status(500).json({ success: false, message: "An error occurred while adding food" });
  }
};

// List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("Error fetching food list:", error);
    res.status(500).json({ success: false, message: "An error occurred while fetching food list" });
  }
};


// remove food item
const removeFood = async (req, res) => {
    try {
      // Find the food item by ID
      const food = await foodModel.findById(req.body.id);
  
      // Check if food exists
      if (!food) {
        return res.status(404).json({ success: false, message: "Food not found" });
      }
  
      // Proceed to delete the image file if it exists
      if (food.image) {
        fs.unlink(`uploads/${food.image}`, (err) => {
          if (err) {
            console.error("Error deleting image:", err);
            return res.status(500).json({ success: false, message: "Error deleting image" });
          }
  
          // Proceed to delete the food item
          foodModel.findByIdAndDelete(req.body.id)
            .then(() => {
              res.json({ success: true, message: "Food removed successfully" });
            })
            .catch((error) => {
              console.error("Error deleting food:", error);
              res.status(500).json({ success: false, message: "Error deleting food" });
            });
        });
      } else {
        // Proceed to delete the food item even if no image exists
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed successfully, no image found" });
      }
    } catch (error) {
      console.error("Error in removeFood:", error);
      res.status(500).json({ success: false, message: "An error occurred while removing food" });
    }
  };


export { addFood, listFood , removeFood};
