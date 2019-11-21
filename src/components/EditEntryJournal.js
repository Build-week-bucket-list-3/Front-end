import React, { useState } from "react";
import useForm from "react-hook-form";

export default function EditEntryJournal() {
  const [ShowText, setShowText] = useState(true);
  const empty = "";
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  // console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Edit Bucket List</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="EditBucketListName"
          name="EditBucketListName"
          ref={register}
          placeholder=" Selected Bucket List Name"
        />
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="GoalCompleted"
            name="GoalCompleted"
            ref={register}
          />
          <label className="form-check-label" htmlFor="goalcompleted">
            Goal Completed
          </label>
        </div>
      </div>
      <div className="form-group">
        <h3>Date:</h3>
        {ShowText && (
          <textarea
            className="form-control"
            id="journal1"
            name="EditJournal"
            ref={register}
          ></textarea>
        )}
        <button
          className="btn btn-secondary"
          onClick={() => setShowText(!ShowText)}
        >
          X
        </button>

        <input className="btn btn-primary" type="submit" value="save" />
      </div>
    </form>
  );
}

//need to make sure everyone does npm install react-hook-form
//still need to add navlinks with router for journal and media
//still need to fetch all of the real data
//still need to add a actual grid for media
