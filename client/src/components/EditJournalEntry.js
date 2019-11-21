import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import useForm from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { BucketListsContext } from "../context/BucketListsContext";

export default function BucketListEdit() {
  const [ShowText, setShowText] = useState(true);
  const params = useParams();
  const history = useHistory();
  const { refreshBucketLists } = useContext(BucketListsContext);
  const { register, handleSubmit, setValue, errors } = useForm();

  const onSubmit = data => {
    const payload = {
      bucket_id: params.id,
      item_name: data.title,
      completed: data.GoalCompleted,
      journal_entry: data.EditJournal
    };
    axiosWithAuth()
      .put(`/items/${params.itemId}`, payload)
      .then(() => {
        refreshBucketLists();
        history.push(`/bucketlist/${params.id}`);
      })
      .catch(err => console.log("error on item update:", err.message));
  };

  const deleteItem = event => {
    event.preventDefault();

    axiosWithAuth()
      .delete(`/items/${params.itemId}`)
      .then(() => {
        refreshBucketLists();
        history.push(`/bucketlist/${params.id}`);
      })
      .catch(err => console.log("error on item delete:", err.message));
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/items/${params.itemId}`)
      .then(res => {
        setValue("title", res.data.item_name);
        setValue("GoalCompleted", res.data.completed);
        setValue("EditJournal", res.data.journal_entry);
        setValue("media", res.data.photo);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Title</h2>
      <div className="form-group">
        <input
          name="title"
          className="form-control"
          type="text"
          ref={register}
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
        <h3>Journal Entry</h3>
        <textarea
          className="form-control"
          name="EditJournal"
          ref={register}
        ></textarea>
      </div>
      <div className="form-group">
        <h3>Photo</h3>
        <input
          className="form-control"
          name="media"
          ref={register}
          placeholder="http://"
        />
      </div>
      <button className="btn btn-secondary btn-block" onClick={deleteItem}>
        Delete
      </button>
      <button className="btn btn-primary btn-block" type="submit">
        Save
      </button>
    </form>
  );
}

//need to make sure everyone does npm install react-hook-form
//still need to add navlinks with router for journal and media
//still need to fetch all of the real data
//still need to add a actual grid for media
