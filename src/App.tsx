import React from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

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
