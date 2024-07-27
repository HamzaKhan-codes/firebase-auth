import { useState, useEffect } from "react";
import Router from "./config/router";
import Register from "./views/dashboard/register";
import Login from "./views/dashboard/login";
import Detail from "./Detail/detail";
import "./App.css";
import { onAuthStateChanged, auth } from "firebase/auth";

function App() {

  const [user, setUser] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user logged in', user)
        setUser(user)

        const uid = user.uid;
      } 
      else {

      }
    })
  }, []
)
  return (
    <div className="App">
      <header className="App-header">
        <h3>{user?.email}</h3>
        <Register/>
        <Login/>
        <Router/> 
      </header>
    </div>
  );
}

export default App;
