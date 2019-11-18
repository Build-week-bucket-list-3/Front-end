import React from "react";
import NewUserForm from "./username and password";
import axios from "axios";

export function handleSubmit(values, { setStatus }) {
  axios
    .post("https://reqres.in/api/users/", values)
    .then(res => {
      setStatus(res.data);
    })
    .catch(err => console.log(err.response));
}
NewUserForm;
