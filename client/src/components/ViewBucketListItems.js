import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import styled from "styled-components";

const ViewBucketListItems = () => {
  const Card = styled.div`
    width: 250px;
    height: 350px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
    margin-right: 5%;
    margin-top: 5%;
    box-shadow: 5px 10px 5px lightgrey;
    &:hover {
      background: lightgrey;
      box-shadow: 5px 10px 5px grey;
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

  const [ShowText, setShowText] = useState(true);

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
        {ShowText && (
          <Row>
            <Card className="card">
              <Img>
                <img src="images/australia.jpg" />
              </Img>
              <h4>Visit Australia</h4>
              <p>Private</p>
              <button className="detailsBItem btn btn-primary">Details</button>
            </Card>

            <Card className="card">
              <Img>
                <img src="images/england.jpg" />
              </Img>
              <h4>Visit England</h4>
              <p>Private</p>
              <button className="detailsBItem btn btn-primary">Details</button>
            </Card>

            <Card className="card">
              <Img>
                <img src="images/greece.jpg" />
              </Img>
              <h4>Visit Greece</h4>
              <p>Private</p>
              <button className="detailsBItem btn btn-primary">Details</button>
            </Card>
            <Card className="card">
              <Img>
                <img src="images/paris.jpg" />
              </Img>
              <h4>Visit Paris</h4>
              <p>Public</p>
              <button className="detailsBItem btn btn-primary">Details</button>
            </Card>

            <Card className="card">
              <Img>
                <img src="images/ireland.jpg" />
              </Img>
              <h4>Visit Ireland</h4>
              <p>Private</p>
              <button className="detailsBItem btn btn-primary">Details</button>
            </Card>

            <Card className="card">
              <Img>
                <img src="images/mexico.jpg" />
              </Img>
              <h4>Visit Mexico</h4>
              <p>Private</p>
              <button className="detailsBItem btn btn-primary">Details</button>
            </Card>
          </Row>
        )}
      </div>
    </div>
  );
};

export default ViewBucketListItems;
