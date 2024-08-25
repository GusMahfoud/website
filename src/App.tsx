import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Home from "./components/pages/HomePage/Home";
import Profile from "./components/pages/Profile/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
