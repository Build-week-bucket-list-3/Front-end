import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';
import { ListContainer, Card } from '../style/GlobalStyles';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { BucketListsContext } from '../context/BucketListsContext';


const ViewBucketListItems = (props) => {
  const [items, setItems] = useState([]);
  const { bucketLists, refreshBucketLists } = useContext(BucketListsContext);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get('/items')
      .then(res => {
        setItems(res.data.filter(item => `${item.bucket_id}` === params.id));
      })
      .catch(err => console.log(err.message));

  }, []);

  const deleteBucket = event => {
    event.preventDefault();

    axiosWithAuth()
      .delete(`/buckets/${params.id}`)
      .then(() => {
        refreshBucketLists();
        history.push(`/bucketlists`);
      })
      .catch(err => console.log("error on item delete:", err.message));
  };

  return (
    <div>
      <h2 className='text-center'>{params.id}</h2>
      <Link to={`/bucketlist/share/${params.id}`} className="share btn btn-primary btn-block">
        Share
        </Link>
      <button className="btn btn-secondary btn-block" onClick={deleteBucket}>
        Delete Bucket List
      </button>
      <Link className="createBItem btn btn-secondary btn-block" to={`/bucketlist/create/${params.id}`}>Create a Bucket List Item</Link>
      <ListContainer>
        {
          items.map(item => (
            <Card>
              <Link key={item.id} to={`/bucketlist/edit/${params.id}/${item.id}`}>
                {Boolean(item.photo) && <img className="card-img-top" src={item.photo} alt={item.item_name} />}
                {console.log(item.photo)}
                <div className="card-body">
                  <h3 className="card-title">{item.item_name}</h3>
                  <p className="card-text">{item.journal_entry}</p>
                  {Boolean(item.completed) && <img src="/images/icon-checkmark.svg" alt="Goal completed" />}
                </div>
              </Link>
            </Card>
          ))
        }
      </ListContainer>
      <div>

      </div>
    </div >
  );
};

export default ViewBucketListItems;

