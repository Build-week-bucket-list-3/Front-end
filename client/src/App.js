import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import CreateBucketList from "./components/create-bucket-list";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SignIn />
        <CreateAccount />
        <CreateBucketList />
      </div>
    </Router>
  );
}

export default App;
