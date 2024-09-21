import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import AdmForm from "./Components/AdmForm";
import AboutUs from "./Components/AboutUs";
import OurServices from "./Components/OurServices";
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissionForm" element={<AdmForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
