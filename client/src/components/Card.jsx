import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Zoom } from '@mui/material';
import { useState } from 'react';

const Card = props =>{

    const [zoom, setZoom] = useState(true);

    const card = {
        margin: "20px",
        width: "calc(100% - 40px)",
        maxWidth: "18rem",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "left",
        display: "inline-block",
        backgroundColor: "#F9F7F7"
    }

    const deleteCard = () =>{
        props.deleteNote(props.id);
    }

    return <Zoom in={zoom}><div className="shadow" style={card}>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>

                <button onClick={deleteCard} className="d-flex align-self-end text-decoration-none text-right text-warning fw-bolder bg-transparent border-0"><DeleteForeverIcon sx={{fontSize:30}}/></button>
            </div>
         </div>
        </Zoom>
}

export default Card