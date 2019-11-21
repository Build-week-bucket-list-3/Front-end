import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

const ViewBucketListItems = () => {
  const [ShowText, setShowText] = useState(true);
  const Blheader = styled.div`
    text-align: center;
    h2 {
      margin-bottom: 1rem;
    }
  `;

  const ListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  `;
  const Card = styled.div`
    width: 45%;
    background-color: #e5e5e5;
    color: #333;
    margin: 1.8rem 0;
    box-shadow: 0 0.2rem 0.5rem rgba(000, 000, 000, 0.2);
    a {
      color: inherit;
    }
    .card-text {
      h3 {
        font-weight: 500;
      }
      padding: 1.5rem 1rem;
      text-align: left;
    }
  `;
  const Img = styled.div`
    width: 90%;
    height: 50%;
    margin: 0 auto;
  `;
  const Row = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `;

  const [BucketListItemData, setBucketListItemData] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("bucketlists/{bucketlistid}/items/")
      .then(res => setBucketListItemData(res.data))
      .catch(err => console.log(err.message));

    axiosWithAuth()
      .get("bucketlists/{bucketlistid}/items/")
      .then(res => console.log(res))
      .catch(err =>
        console.log("there is a error from the axios with auth,", err)
      );
  }, []);
  return (
    <>
      <Blheader>
        <h2>Bucket List Items</h2>
        <Link to="/bucketlist/create/:id" className=" btn btn-secondary">
          Create a Bucket List Item
        </Link>
      </Blheader>
      <ListContainer>
        {ShowText &&
          BucketListItemData.map(item => {
            console.log("item:", item);
            return (
              <Row>
                <Card key={item.bucketListId}>
                  <Link to={`/bucketlist/${item.bucketListId}`}>
                    <Img>
                      <img src="../images/mountains.jpg" alt="card img" />
                    </Img>
                    <div className="card-text">
                      <h3>{item.bucketlistName}</h3>
                    </div>
                  </Link>
                </Card>
              </Row>
            );
          })}
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
            {ShowText && (
              <button className="edit btn btn-secondary">Edit</button>
            )}
          </span>
        </div>
      </ListContainer>
    </>
  );
};

export default ViewBucketListItems;
