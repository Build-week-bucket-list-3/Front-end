import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import CreateBucketListItem from './components/CreateBucketListItem';
import CreateBucketList from "./components/CreateBucketList";
import BucketListEdit from "./components/EditBucketList";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Header />
        <div className='container'>
          <SignIn />
          <hr />
          <CreateAccount />
          <hr />
          <CreateBucketList />
          <hr />
          <CreateBucketListItem />
          <hr />
          <BucketListEdit />
        </div>
      </div>
    </Router>
  );
}

export default App;
