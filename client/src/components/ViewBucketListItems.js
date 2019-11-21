import React, { useState, useEffect } from "react";

import {axiosWithAuth} from "../utils/axiosWithAuth";
const ViewBucketListItems = (props) => {
const [ShowText, setShowText] = useState(true);
const [BlItems, setBlItems] = useState([]);


  useEffect(() => {
    let itemName = props.match.params.name.replace(' ', '');
    axiosWithAuth()
        .get(`/users/bucketlists/view/${itemName}`)
        .then(res => setBlItems(res.data))
        .catch(err => console.log(err.message));

}, []);


  return (
    <div>
      <span>
        {ShowText && <h2>Traveling</h2>}
        {ShowText && (
          <button className="share btn btn-primary" href="#">
            share
          </button>
        )}
      </span>
      <span>
        <button className="createBItem btn btn-secondary">
          Create a Bucket List Item
        </button>
        {ShowText && (
          <button
            className="delete btn btn-secondary"
            onClick={() => setShowText(!ShowText)}
          >
            Delete
          </button>
        )}
        {ShowText && (
          <button className="details btn btn-secondary">Details</button>
        )}
        {ShowText && <button className="edit btn btn-secondary">Edit</button>}
      </span>
      <div>
       {console.log(BlItems)}
        
      </div>
    </div>
  );
};
export default ViewBucketListItems;