import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';
import {ListContainer, Card} from '../style/GlobalStyles';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { BucketListsContext } from '../context/BucketListsContext';


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
                {console.log(item.photo)}
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

