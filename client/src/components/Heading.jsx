import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Heading = () =>{
    return <>
<nav className="navbar navbar-light bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <LightbulbIcon sx={{fontSize:30, color: "white"}}/> <small className="fw-bolder text-light">KeepNotes</small>
    </a>
  </div>
</nav>
    </>

}

export default Heading;