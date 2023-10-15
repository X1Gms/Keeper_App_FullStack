import express from "express";
import mongoose, { Schema } from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

mongoose.connect(process.env.CONNECTION);

const NoteSchema = new Schema({
    title:String,
    content: String
})

const Notes = mongoose.model("Note", NoteSchema);

app.get("/api",(req,res)=>{
    Notes.find({})
    .then(response=>{
        res.json(response);
    }).catch(e=>{
        console.error("Error:" + e);
    });
})

app.post("/post",(req,res)=>{

    console.log("Req" + req.body);

    const notes = new Notes({title: req.body.title, content: req.body.content});

    notes.save()
    .then(savedNote => {
        console.log('Note saved successfully:', savedNote);
        res.json(savedNote); // Send the saved note as a response
    })
    .catch(error => {
        console.error('Error saving note:', error);
        res.status(500).json({ error: 'Internal Server Error' }); // Send an error response
    });;
});

app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    Notes.deleteOne({_id: id})
    .then(res=>console.log(res))
    .catch(e=>console.error(e));

    Notes.find({})
    .then(response => res.json(response))
    .catch(e=>console.error(e));
})

app.listen(3001, ()=>{
    console.log("Server running on port 3001");
})