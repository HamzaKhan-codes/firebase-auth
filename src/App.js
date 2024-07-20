import { useState, useEffect } from "react";
import Router from "./config/router";
import Register from "./views/dashboard/register";
import Login from "./views/dashboard/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register/>
        <Login/>
        <Router/> 
      </header>
    </div>
  );
}

export default App;
