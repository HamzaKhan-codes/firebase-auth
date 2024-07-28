import { useState, useEffect } from "react";
import Router from "./config/router";
import { onAuthStateChanged, auth } from "./config/firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user logged in", user);
        setUser(user);

        const uid = user.uid;
      } else {
      }
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h3>{user?.email}</h3> 
        <Router />
      </header>
    </div>
  );
}

export default App;
