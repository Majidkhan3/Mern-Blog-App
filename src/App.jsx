// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
// import "flowbite/dist/flowbite.css";

import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Header from "../src/components/Header";
import FooterCom from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
};

export default App;
