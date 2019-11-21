import React from "react";
import useForm from "react-hook-form";

export default function ShareBucketList() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Share</h2>
      <input
        className="form-control"
        type="text"
        placeholder="username"
        name="userName"
        ref={register}
      />
      <div className="form-group">
        <p>Grant "update" privaleges to this user</p>
        <input
          type="checkbox"
          placeholder="grantEditPrivaleges"
          name="grantEditPrivaleges"
          ref={register}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </div>
    </form>
  );
}
