import {Routes, Route } from "react-router-dom";
import React from 'react'
import '../components/App.scss'
import Header from "../components/Generic/Header";
import Footer from "../components/Generic/Footer";
import Home from "./pages/homePage/Home"
import Login from "./pages/login/Login";
import NotFound from "../components/Generic/404";

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