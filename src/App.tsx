import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Home from "./components/pages/HomePage/Home";
import Categories from "./components/pages/CategoriesPage/Categories";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
