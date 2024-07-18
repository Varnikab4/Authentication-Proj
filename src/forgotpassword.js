import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
    const nav = useNavigate();

    useEffect(() => {
        let un = localStorage.getItem("un");
        if (un !== null) {
            nav("/home");
        }
    }, []);

    const rUn = useRef();

    const [un, setUn] = useState("");
    const [msg, setMsg] = useState("");

    const hUn = (event) => {
        setUn(event.target.value);
    };

    const sm = (event) => {
        event.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth, un)
            .then(() => {
                setMsg("Password reset email sent. Check your inbox.");
            })
            .catch((err) => {
                setMsg("Issue sending password reset email: " + err.message);
            });
    };

    return (
        <>
            <center>
                <h1>Forgot Password Page</h1>
                <form onSubmit={sm}>
                    <input
                        type="email"
                        placeholder="Enter registered email"
                        onChange={hUn}
                        ref={rUn}
                        value={un}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <h2 id="msg">{msg}</h2>
            </center>
        </>
    );
}

export default  ForgotPassword;
