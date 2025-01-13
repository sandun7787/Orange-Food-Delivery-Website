import foodModel from '../models/foodModel.js';
import fs from 'fs';
import multer from 'multer';

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Store images in the uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Use timestamp to avoid file name collision
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'), false);
        }
    }
});

// Add food item
const addFood = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    let image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to add food item", error: error.message });
    }
};

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to retrieve food list", error: error.message });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        // Delete the food image from the server
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.error('Error deleting image:', err);
                return res.status(500).json({ success: false, message: 'Error deleting image' });
            }

            // Delete the food item from the database
            foodModel.findByIdAndDelete(req.body.id)
                .then(() => res.json({ success: true, message: "Food Removed" }))
                .catch(err => {
                    console.error('Error removing food:', err);
                    res.status(500).json({ success: false, message: 'Error removing food' });
                });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to remove food item", error: error.message });
    }
};

export { addFood, listFood, removeFood };
