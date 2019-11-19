import React, { useState } from "react";
import useForm from "react-hook-form";

export default function BucketListEdit() {
  const [ShowText, setShowText] = useState(true);
  const empty = "";
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Edit Bucket List</h2>
      <select name="ChooseBucketList" ref={register}>
        <option value="DummyData1">DummyData1</option>
        <option value="DummyData2">DummyData2</option>
        <option value="DummyData3">DummyData3</option>
      </select>
      <span>Goal Completed</span>
      <input
        type="checkbox"
        placeholder="GoalCompleted"
        name="GoalCompleted"
        ref={register}
      />
      <h3>Date:</h3>
      {ShowText && (
        <textarea
          className="journal"
          id="journal1"
          name="EditJournal"
          ref={register}
        ></textarea>
      )}
      <button onClick={() => setShowText(!ShowText)}>X</button>

      <input type="submit" value="save" />
    </form>
  );
}

//need to make sure everyone does npm install react-hook-form
//still need to add navlinks with router for journal and media
//still need to fetch all of the real data
//still need to add a actual grid for media
