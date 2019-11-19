import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import CreateBucketList from "./components/create-bucket-list";
import BucketListEdit from "./components/bucket-list-edit";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SignIn />
        <CreateAccount />
        <CreateBucketList />
        <BucketListEdit />
      </div>
    </Router>
  );
}

export default App;
