import {Routes, Route } from "react-router-dom";
import React from 'react'
import '../scss/App.scss'
import Header from "../components/Header";
import Footer from "./Footer";
import Home from "./pages/homePage/Home"
import Login from "./pages/login/Login";
import NotFound from "./404";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;