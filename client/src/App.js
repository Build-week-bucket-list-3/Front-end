import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Header />
        <div className='container'>
          <SignIn />
          <CreateAccount />
        </div>
      </div>
    </Router>
  );
}

export default App;
