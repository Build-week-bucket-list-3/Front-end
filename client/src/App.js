import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/Header';
import UserLogin from './components/SignIn';
import UserRegistration from "./components/CreateAccount";
import BucketLists from "./components/BucketLists";
import CreateBucketList from './components/CreateBucketList';
import CreateBucketListItem from './components/CreateBucketListItem';
import ViewBucketListItems from "./components/ViewBucketListItems";
import AddJournalEntry from './components/AddJournalEntry';
import EditJournalEntry from './components/EditJournalEntry';
import ShareBucketList from './components/ShareBucketList';

import { GlobalStyles } from './style/GlobalStyles';
import { PrivateRoute } from './utils/PrivateRoute';
import { BucketListsContext } from './context/BucketListsContext'
import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const [bucketLists, setBucketLists] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const refreshBucketLists = () => {
    axiosWithAuth()
      .get('/buckets')
      .then(res => {
        setBucketLists(res.data);
      })
      .catch(err => console.log('error fetching bucket lists', err.message));
  }

  const getCurrentUser = username => {
    axiosWithAuth()
      .get('/users')
      .then(res => {
        const user = res.data.user.find(account => account.username === username)
        console.log(res);
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user);
      })
      .catch(err => console.log('error on fetch user info:', err.message))

  }

  return (
    <BucketListsContext.Provider value={{ bucketLists, refreshBucketLists, getCurrentUser, user }}>
      <Router>
        <div className='App'>
          <GlobalStyles />
          <NavBar />
          <div className='container'>
            <Route path='/Login' render={props => <UserLogin {...props} />} />
            <Route path='/Register' render={props => <UserRegistration {...props} />} />
            <PrivateRoute path='/bucketlists' component={BucketLists} />
            <Switch>
              <PrivateRoute path='/bucketlist/add' component={AddJournalEntry} />
              <PrivateRoute path='/bucketlist/edit/:id/:itemId' component={EditJournalEntry} />
              <PrivateRoute path='/bucketlist/share' component={ShareBucketList} />
              <PrivateRoute path='/bucketlist/create/:id' component={CreateBucketListItem} />
              <PrivateRoute path='/bucketlist/new' component={CreateBucketList} />
              <PrivateRoute path='/bucketlist/:id' component={ViewBucketListItems} />
            </Switch>
          </div>
        </div>
      </Router >
    </BucketListsContext.Provider>
  );
}

export default App;
