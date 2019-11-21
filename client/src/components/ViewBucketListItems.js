import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';



import { axiosWithAuth } from "../utils/axiosWithAuth";
import { BucketListsContext } from '../context/BucketListsContext';

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
const ViewBucketListItems = (props) => {
  const [ShowText, setShowText] = useState(true);
  const [items, setItems] = useState([]);
  const { bucketLists } = useContext(BucketListsContext);
  const params = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get('/items')
      .then(res => {
        setItems(res.data.filter(item => `${item.bucket_id}` === params.id));
      })
      .catch(err => console.log(err.message));

  }, []);

  console.log(items);

  return (
    <div>
      <div className=''>
        <h2>Traveling</h2>
        <button className="share btn btn-primary">
          share
        </button>
      </div>
      <Link className="createBItem btn btn-secondary btn-block" to={`/bucketlist/create/${params.id}`}>Create a Bucket List Item</Link>
      <ListContainer>
        {
          items.map(item => (
            <Link key={item.id} to={`/bucketlist/edit/${params.id}/${item.id}`}>
              <Card>
                {Boolean(item.photo) && <img src={item.photo} alt={item.item_name} />}
                <p>{item.item_name}</p>
                <p>{item.journal_entry}</p>
              </Card>
            </Link>
          ))
        }
      </ListContainer>
      <div>

      </div>
    </div >
  );
};
export default ViewBucketListItems;

