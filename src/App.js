import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Appointment from "./Components/Pages/Appointment/Appointment";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
