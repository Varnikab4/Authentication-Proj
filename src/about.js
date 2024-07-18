import {useState, useRef} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from  "./Navbar"; 
import './App.css';
import { Link } from "react-router-dom";

function About(){
    const nav = useNavigate();
    const[un, setUn] = useState("");

    useEffect(() =>{
        const u = localStorage.getItem("un");
        if( u == null){
            nav("/");
        }
    },[]);

    return(
        <>
        <center>
        <div className="about">
      <header>
        <h1>About Us</h1>
        <p>Learn more about our gym and our mission to promote fitness and well-being.</p>
      </header>
      <main>
        <section className="description">
          <h2>Our Story &#127947;</h2>
          <p>Founded in 2024, our gym has been dedicated to helping individuals achieve their fitness goals through personalized training and community support. Our mission is to create a welcoming environment where everyone can pursue a healthier lifestyle.</p>
        </section>
        <h2>Our Team</h2>
        <section className="team">
          <div className="teamMember">
            <img src="./lean.png" alt="Team Member 1" />
            <div>
              <h3>John Doe</h3>
              <p>Founder & Head Trainer</p>
              <p>John is passionate about fitness and has over 5 years of experience in personal training.</p>
            </div>
          </div>
          <div className="teamMember">
            <img src="./intro1.jpg" alt="Team Member 2" />
            <div>
              <h3>Jane Smith</h3>
              <p>Lead Nutritionist</p>
              <p>Jane specializes in creating personalized nutrition plans to complement our clients' fitness routines.</p>
            </div>
          </div>
        </section>
        <section className="mission">
          <h2>Our Mission</h2>
          <p>Our mission is to empower individuals to live healthier lives by providing exceptional fitness programs, nutritional guidance, and a supportive community environment.</p>
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
}export default About;