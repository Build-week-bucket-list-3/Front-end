import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/Header';
import UserLogin from './components/SignIn';
import UserRegistration from "./components/CreateAccount";
import CreateBucketListItem from './components/CreateBucketListItem';
import CreateBucketList from './components/CreateBucketList';
import EditBucketList from './components/EditBucketList';
import ShareBucketList from './components/ShareBucketList';
import AddEntry from './components/AddEntry';

import { GlobalStyles } from './style/GlobalStyles';
import { PrivateRoute } from './utils/PrivateRoute';


function App() {
  return (
    <Router>
      <div className='App'>
        <GlobalStyles />
        <NavBar />
        <div className='container'>
          <Route path='/Login' render={props => <UserLogin {...props} />} />
          <Route path='/Register' render={props => <UserRegistration {...props} />} />
          <PrivateRoute path='/bucketlist/create' component={CreateBucketList} />
          <PrivateRoute path='/bucketlist/create/:id' component={CreateBucketListItem} />
          <PrivateRoute path='/bucketlist/edit' component={EditBucketList} />
          <PrivateRoute path='/bucketlist/add' component={AddEntry} />
          <PrivateRoute path='/bucketlist/share' component={ShareBucketList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
