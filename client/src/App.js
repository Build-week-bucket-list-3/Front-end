import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SignIn />
        <CreateAccount />
      </div>
    </Router>
  );
}

export default App;
