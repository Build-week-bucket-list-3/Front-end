import React, { useState, useEffect } from "react";
import axios from "axios";

const SignIn = props => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
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
      .then(res => {})
      .catch(error => console.log(`error: ${error}`));
  }

  return (
    <div className="sign-in">
      <div>
        <h2>Sign in</h2>
        <p>
          or{" "}
          <span>
            <a href="#">create a account</a>
          </span>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          value={userData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={userData.password}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
