import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import CreateBucketList from "./components/create-bucket-list";
import BucketListEdit from "./components/bucket-list-edit";
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
          <CreateBucketList />
          <BucketListEdit />
        </div>
      </div>
    </Router>
  );
}

export default App;
