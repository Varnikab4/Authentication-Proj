import {useState, useRef} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from  "./Navbar"; 
import './App.css';
import { Link } from "react-router-dom";

function Home(){
    const nav = useNavigate();
    const[un, setUn] = useState("");

    useEffect(() =>{
        const u = localStorage.getItem("un");
        if( u != null){
            setUn(u);
        }
        else{
            nav("/");
        }

    },[]);

    const logout = (event) =>{
        event.preventDefault();
        localStorage.removeItem("un");
        nav('/');
    }
    return(
        <>
        <center>
        <div className="gym-home">
      <header>
        <h1>Welcome to MyFitneeClub &#127947;</h1>
        <p>Your ultimate destination for fitness!</p>
      </header>
      <main>
        <section className="about">
          <h2>About Us</h2>
          <p>Welcome to our gym, where fitness meets lifestyle. We are dedicated to helping you achieve your fitness goals with personalized training programs, state-of-the-art equipment, and expert trainers.</p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>Nutritional Guidance</li>
            <li>Specialized Workout Programs</li>
          </ul>
        </section>
        <section className="schedule">
          <h2>Class Schedule</h2>
          <p>Check out our weekly schedule for classes and training sessions. Join us to stay fit and motivated!</p>
          <Link to="/schedule">View Schedule</Link>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Have questions or ready to get started? Contact our team today!</p>
          <Link to="/contact">Contact Us</Link>
        </section>
      </main>
      <footer>
      <p>&copy; 2024 MyFitnessClub. All rights reserved. </p>
      <p>&copy; Made by Varnika Bhoga</p>
      </footer>
    </div>
        </center>
        </>

    );
}export default Home;