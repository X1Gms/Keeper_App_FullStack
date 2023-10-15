import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from "@mui/material";
const AddItem = props =>{

    const [Note,SetNote] = useState({
      title: "",
      content: ""
    });

    const [Active, SetActive] = useState(false);

    const onChange = (e) =>{
      const {name, value} = e.target;

      SetNote(prev =>({
        ...prev,
        [name]:value
      }))
    }

    const inputClick = () => {
      SetActive(true);
    }

  
    const card = {
        margin: "40px auto",
        padding: "25px",
        borderRadius: "10px",
        textAlign: "left",
        width:"calc(100% - 40px)",
        maxWidth: "500px",
        position:"relative",
        backgroundColor: "#F9F7F7"
    }

    const onSubmit = (e) =>{

        props.createNote(Note)

        SetNote({
          title:"",
          content:""
        })

        e.preventDefault();

    }

    return <div style={card} className="shadow" id="addItem">
    <div className="card-body">
    <form>
    <input name="title" onClick={inputClick} onChange={onChange} type="text" className="card-title border-0" placeholder="Write a Note..." value={Note.title}></input>
    {Active && <div className="ItemsAppear">
      <textarea name="content" onChange={onChange} type="text" className="card-text border-0" placeholder="Note" value={Note.content}></textarea>
      <Zoom in={Active}>
        <Fab onClick={onSubmit} type="submit" className="bg-warning text-white shadow"><AddIcon/></Fab>
      </Zoom>
    </div>}
    </form>
    </div>
  </div>
}

export default AddItem;