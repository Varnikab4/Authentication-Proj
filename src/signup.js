import {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from  "./Navbar";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect } from "react";
import app from "./firebase";
import './App.css';

function Signup(){
    const nav = useNavigate();

    useEffect(() =>{
        let un = localStorage.getItem("un");
        if(un !== null){
            nav("/home");
        }
    }, []);

        const rUn = useRef();
        const rPw1 = useRef();
        const rPw2 = useRef();

        const[un, setUn] = useState("");
        const[pw1, setPw1] = useState("");
        const[pw2, setPw2] = useState("");
        const[msg, setMsg] = useState("");

        const hUn = (event) =>{
            setUn(event.target.value);
        }
        const hPw1 = (event) =>{
            setPw1(event.target.value);
        }
        const hPw2 = (event) =>{
            setPw2(event.target.value);
        }

        const register = (event) =>{
            event.preventDefault();
            if(pw1 === pw2){
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, un, pw1)
                .then(res => {
                    nav("/");
                })
                .catch(err => setMsg("issue" +err));
            }
            else{
                setMsg("Passwords did not match");
                setPw1("");
                setPw2("");
                rPw1.current.focus();
            }
        }
    return(
        
        <>
        <center>
            <h1>Signup Page</h1>
            <form onSubmit={register}>
                <input type = "email" placeholder="Enter email" onChange={hUn} ref={rUn} value={un}/>
                <br/><br/>
                <input type="password" placeholder="Enter password" onChange={hPw1} ref={rPw1} value={pw1}/>
                <br/><br/>
                <input type="password" placeholder="Confirm password" onChange={hPw2} ref={rPw2} value={pw2}/>
                <br/><br/>
                <input type="submit" value="Sign Up"/>
                
                
            </form>
            <h2 id="msg">{msg}</h2>
        </center>
        </>

    );
}export default Signup;