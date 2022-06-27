import {Routes, Route } from "react-router-dom";
import React from 'react'
import '../components/App.scss'
import Header from "../components/Generic/Header";
import Footer from "../components/Generic/Footer";
import Login from '../pages/login/Login'
import Redirection from "../pages/NotFound/Redirection";
import Home from "../pages/homePage/Home"
import UserProfil from "../pages/userProfil/UserProfil";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfil />} />
        <Route path="*" element={<Redirection />} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;