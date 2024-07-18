import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar'; 
import Login from './login';
import Signup from './signup';
import ForgotPassword from './forgotpassword';
import Home from './home';
import About from './about';
import ChangePassword from './changepassword';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
