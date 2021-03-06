import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { BucketListsContext } from '../context/BucketListsContext';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const CreateBucketList = props => {
  const [userData, setUserData] = useState({
    name: "",
    shareable: false
  });

  const { user } = useContext(BucketListsContext);
  const history = useHistory();

  function handleChange(event) {
    const value = event.target.name === 'shareable' ? !userData.shareable : event.target.value;

    setUserData({
      ...userData,
      [event.target.name]: value
    });
  }

  console.log(userData);

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      title: userData.name,
      user_id: user.id
    }

    axiosWithAuth()
      .post("/buckets", payload)
      .then(() => history.push('/bucketlists'))
      .catch(error => console.log(`error: ${error}`));
  }

  return (
    <div className="create-account-container">
      <h2>Create Bucket List</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
            value={userData.name}
          />
          {console.log('user data', userData)}
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shareable"
              onChange={handleChange}
              value={userData.shareable}
            />
            <label className="form-check-label" htmlFor="privacy">Make public</label>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Create Bucket List
          </button>
        </div>
      </form>

    </div >
  );
};

export default CreateBucketList;
