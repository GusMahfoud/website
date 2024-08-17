import React from "react";
import "./styles/App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/pages/HomePage/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
