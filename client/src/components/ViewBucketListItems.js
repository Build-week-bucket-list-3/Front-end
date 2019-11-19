import React from "react";

const ViewBucketListItems = () => {
  return (
    <div>
      <span>
        <h2>Traveling</h2>

        <button className="share Btn Btn-primary" href="#">
          share
        </button>
      </span>
      <span>
        <button>Delete</button>
        <button>Details</button>
        <button>Edit</button>
      </span>

      <div className="card">
        <img></img>
        <h4>Visit Australia</h4>
        <p>Private</p>
        <button>Details</button>
      </div>

      <div className="card">
        <img></img>
        <h4>Visit England</h4>
        <p>Private</p>
        <button>Details</button>
      </div>

      <div className="card">
        <img></img>
        <h4>Visit Greece</h4>
        <p>Private</p>
        <button>Details</button>
      </div>

      <div className="card">
        <img></img>
        <h4>Visit Paris</h4>
        <p>Public</p>
        <button>Details</button>
      </div>

      <div className="card">
        <img></img>
        <h4>Visit Ireland</h4>
        <p>Private</p>
        <button>Details</button>
      </div>

      <div className="card">
        <img></img>
        <h4>Visit Mexico</h4>
        <p>Private</p>
        <button>Details</button>
      </div>
    </div>
  );
};

export default ViewBucketListItems;
