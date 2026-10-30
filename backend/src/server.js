import express from "express";
import mongoose from "mongoose";
import material from "./models/material.js";

const app = express();
app.use(express.json());

// app.get("/api/health", (req, res) => {
//     res.json({ status: "ok"});

// })

await mongoose.connect("mongodb://localhost:27017/admin");
app.listen(3000, ()=>{
    console.log("Servidor arrancado");
})


app.get("/materiales", async (req, res)=> {
    const materiales = await Material.find();
    res.json(materiales)
});

