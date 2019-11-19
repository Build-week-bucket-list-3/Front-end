import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";

export default function CreateBucketListItem() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async data => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          ref={register({ required: true })}
        />
        {errors.name && "Field is Required"}
        <label>
          Public
          <input
            type="radio"
            name="privacy"
            id="public"
            value="public"
            ref={register({ required: true })}
          />
          {errors.privacy && "Field is Required"}
        </label>
        <label>
          Private
          <input
            type="radio"
            name="privacy"
            id="private"
            value="private"
            ref={register({ required: true })}
          />
          {errors.privacy && "Field is Required"}
        </label>
        <label htmlFor="journal">Journal Entry</label>
        <textarea name="journal" id="journal" ref={register}></textarea>
        <input type="file" name="media" id="media" ref={register} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
