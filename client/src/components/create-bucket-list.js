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
      <div>
        <h2>Create A Bucket List:</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={userData.username}
        />
        {console.log(userData)}
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          value={userData.email}
        />
        <label htmlFor="privacy">public</label>
        <input
          type="radio"
          name="privacy"
          id="public"
          value="Public"
          onChange={handleChange}
          value={userData.privacy}
        />
        <label htmlFor="private">private</label>
        <input
          type="radio"
          name="privacy"
          value="Private"
          onChange={handleChange}
          value={userData.privacy}
        />

        <button>Create Bucket List</button>
      </form>
    </div>
  );
};

export default CreateBucketList;
