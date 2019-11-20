import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateBucketList = props => {
  const [userData, setUserData] = useState({
    name: ""
  });

  function handleChange(event) {
    const eventName = event.target.name;
    const eventValue = event.target.value;

    return setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("", userData)
      .then(resp => {})
      .catch(error => console.log(`error: ${error}`));
  }

  return (
    <div className="create-account-container">
      <h2>Create Bucket List</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={userData.username}
          />
          {console.log(userData)}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="privacy"
              id="public"
              value="Public"
              onChange={handleChange}
              value={userData.privacy}
            />
            <label className="form-check-label" htmlFor="privacy">
              Public
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="privacy"
              value="Private"
              onChange={handleChange}
              value={userData.privacy}
            />
            <label className="form-check-label" htmlFor="private">
              Private
            </label>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Create Bucket List
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBucketList;
