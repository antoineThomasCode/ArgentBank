import {Routes, Route } from "react-router-dom";
import React from 'react'
import '../scss/App.scss'
import Header from "../components/Header";
import Footer from "./Footer";
import Home from "./pages/homePage/Home"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;