import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/Header";
import UserLogin from "./components/SignIn";
import UserRegistration from "./components/CreateAccount";
import BucketLists from "./components/BucketList";
import CreateBucketListItem from "./components/CreateBucketListItem";
import ViewBucketListItems from "./components/ViewBucketListItems";
import AddJournalEntry from "./components/AddJournalEntry";
import EditJournalEntry from "./components/EditJournalEntry";
import ShareBucketList from "./components/ShareBucketList";
import { GlobalStyles } from "./style/GlobalStyles";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <NavBar />

        <div className="container">
          <Route path="/Login" render={props => <UserLogin {...props} />} />
          <Route
            path="/Register"
            render={props => <UserRegistration {...props} />}
          />
          <PrivateRoute
            path="/bucketlists/"
            component={props => <BucketLists {...props} />}
          />
          <PrivateRoute
            path="/bucketlist/create"
            component={CreateBucketListItem}
          />
          <PrivateRoute
            path="/bucketlist/create/:id"
            component={CreateBucketListItem}
          />
          <PrivateRoute
            path="/bucketlist/:id"
            component={ViewBucketListItems}
          />
          <PrivateRoute path="/bucketlist/add" component={AddJournalEntry} />
          <PrivateRoute path="/bucketlist/edit" component={EditJournalEntry} />
          <PrivateRoute path="/bucketlist/share" component={ShareBucketList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
