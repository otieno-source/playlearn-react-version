import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUpForm";
import Nav from "./components/Navigator";
import Home from "./components/Home";
import Header from "./components/Header";
import KidsEvent from "./components/KidsEvent";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Home/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signupForm" element={<SignUp />} />
        <Route path="/kidsEvents" element={<KidsEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
