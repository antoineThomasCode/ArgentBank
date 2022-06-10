import {Routes, Route } from "react-router-dom";
import React from 'react'
import '../scss/App.scss'
import Header from "../components/Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;