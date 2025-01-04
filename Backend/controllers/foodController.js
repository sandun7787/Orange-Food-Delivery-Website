import foodModel from "../models/foodModel.js";
import fs from 'fs'
import foodRouter from "../routes/foodRoutes.js";


//add food item

const addFood= async (req,res)=>{

    let image_filename =`${req.file.filename}`;

    const food =new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food addedd"})
    }catch(error){
        console.log(error)
        res.json({sucess:false,message:"Error"})
    }


}


export{addFood}
