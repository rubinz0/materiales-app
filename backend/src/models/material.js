import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    
});

export const Persona = mongoose.model("materiales", materialSchema)