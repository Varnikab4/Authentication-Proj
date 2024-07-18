import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';

function Navbar(){
    const[un, setUn] = useState();
    const nav = useNavigate();
    useEffect(() =>{
        const u = localStorage.getItem("un");
        setUn(u);
    },[]);
    const logout = (event) =>{
        event.preventDefault();
        localStorage.removeItem("un");
        setUn(null);
        nav('/');
    }
    

return(
    <>
    <center>
        <div className="nav">
            {(un == null) && (<Link to="/">login</Link>)}
            {(un == null) && (<Link to="/signup">signup</Link>)}
            {(un == null) && (<Link to="/forgotpassword">forgotpassword</Link>)}

            {(un != null) && (<Link to="/home">Home</Link>)}
            {(un != null) && (<Link to="/about">About</Link>)}
            {(un != null) && (<Link to="/changepassword">Changepassword</Link>)}
            {(un != null) && (<a href="/" onClick={logout}>Logout</a>)}
        </div>
    </center>
    </>

);
}export default Navbar;