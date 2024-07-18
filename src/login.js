import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import app from "./firebase";
import './App.css';

function Login() {
    const nav = useNavigate();

    useEffect(() => {
        let un = localStorage.getItem("un");
        if (un !== null) {
            nav("/home");
        }
    }, []);

    const rUn = useRef();
    const rPw = useRef();

    const [un, setUn] = useState("");
    const [pw, setPw] = useState("");
    const [msg, setMsg] = useState("");

    const hUn = (event) => {
        setUn(event.target.value);
    };

    const hPw = (event) => {
        setPw(event.target.value);
    };

    const login = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, un, pw)
            .then(res => {
                localStorage.setItem("un", un);
                nav("/home");
            })
            .catch(err => setMsg("Issue: " + err.message));
    };

    return (
        <>
            <center>
                <h1>Login Page</h1>
                <form onSubmit={login}>
                    <input type="email" placeholder="Enter email" onChange={hUn} ref={rUn} value={un} />
                    <br /><br />
                    <input type="password" placeholder="Enter password" onChange={hPw} ref={rPw} value={pw} />
                    <br /><br />
                    <input type="submit" value="Login" /> 
                </form>
                <h2 id="msg">{msg}</h2>
            </center>
        </>
    );
}

export default Login;
