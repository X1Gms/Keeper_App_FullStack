import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./index.css";
import Card from "./components/Card";
import AddItem from "./components/AddItem";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () =>{

    const [backendData, setbackendData] = useState([{}]);

    useEffect(()=>{
        axios.get("http://localhost:3001/api")
        .then(res=>{
            setbackendData(res.data);
        })
        .catch(e=>console.error("Error:",e));
    },[]);

    const CreateNote = (notes) => {
        // Check if the notes object is as expected
        axios.post("http://localhost:3001/post", {
            title: notes.title,
            content: notes.content
        })
        .then(response => {
            console.log('Note saved successfully:', response.data);
            setbackendData(prev =>[...prev, response.data])
            // Optionally, you can update the state or perform any other actions
        })
        .catch(error => {
            console.error('Error saving note:', error);
            // Handle the error here
        });
    }
    

    const DeleteCard = (id) =>{
        axios.delete(`http://localhost:3001/delete/${id}`)
        .then(response=>{
            setbackendData(response.data)
        })
        .catch(e=>console.error(e))
    }

    return <div className="page">
    <Heading/>
    <AddItem
    createNote={CreateNote}
    />
    {
    typeof backendData === "undefined" ? <p>Loading</p>:
    backendData.map((props, index) =>{
        
        return <Card
        key={index}
        id={props._id}
        title={props.title}
        content={props.content}
        deleteNote={DeleteCard}/>
    })}
    <Footer/>
    </div>
}

export default App;