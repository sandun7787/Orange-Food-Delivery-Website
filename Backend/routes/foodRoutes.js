import express from "express"
import { addFood } from "../controllers/foodController.js"
import multer from "multer"


const foodRouter =express.Router();


const storage = multer.diskStorage({
    destination:"uploads",
    filename:(rreq,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)

    }
})

const uploads =multer({storage:storage})

foodRouter.post("/add",uploads.single("image"),addFood) 









export default foodRouter;