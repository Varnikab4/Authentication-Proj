import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import { getAuth, updatePassword, onAuthStateChanged } from "firebase/auth";

function ChangePassword() {
    const nav = useNavigate();
    const rPw1 = useRef();
    const rPw2 = useRef();

    useEffect(() => {
        let un = localStorage.getItem("un");
        if (un === null) {
            nav("/");
        }
    }, []);

    const [pw1, setPw1] = useState("");
    const [pw2, setPw2] = useState("");
    const [msg, setMsg] = useState("");

    const hPw1 = (event) => {
        setPw1(event.target.value);
    };

    const hPw2 = (event) => {
        setPw2(event.target.value);
    };

    const cp = (event) => {
        event.preventDefault();
        if (pw1 === pw2) {
            const auth = getAuth();
            const user = auth.currentUser;
            updatePassword(user, pw1)
                .then(() => {
                    localStorage.removeItem("un");
                    nav("/");
                })
                .catch((err) => setMsg("Issue updating password: " + err.message));
        } else {
            setMsg("Passwords did not match");
            setPw1("");
            setPw2("");
            rPw1.current.focus();
        }
    };

    return (
        <>
            <center>
                <h1>Change Password Page</h1>
                <form onSubmit={cp}>
                    <input
                        type="password"
                        placeholder="Enter new password"
                        onChange={hPw1}
                        ref={rPw1}
                        value={pw1}
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        placeholder="Confirm new password"
                        onChange={hPw2}
                        ref={rPw2}
                        value={pw2}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Change Password" />
                </form>
                <h2 id="msg">{msg}</h2>
                
            </center>
        </>
    );
}

export default ChangePassword;
