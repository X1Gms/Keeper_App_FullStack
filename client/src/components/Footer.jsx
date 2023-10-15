const Footer = () =>{

    const p = {
        width: "100%",
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        color: "#BDBDBD",
    }

    return <>
    <p style={p}><small className="">Copyright © {new Date().getFullYear()}</small></p>
    </>
}

export default Footer;