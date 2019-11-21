import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { ListContainer, Card } from '../style/GlobalStyles';


export default function BucketList(props) {
    const [bucketData, setBucketData] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get("/users/all")
            .then(res => setBucketData(res.data))
            .catch(err => console.log(err.message));

    }, []);

    return (
        <>
            <h2>My Bucket Lists</h2>
            <Link to="/bucketlist/create" className=" btn btn-secondary">Create a Bucket List</Link>

            {console.log(bucketData)}
            <ListContainer>

                {bucketData.map(item => {
                    return (
                        <Card key={item.bucketListId}>
                            <Link to={{ pathname:`bucketlist/view/${item.bucketlistName}` }} >
                               
                                <img src="https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="card img" />
                                <div className="card-text">
                                    <h3>{item.bucketlistName}</h3>
                                </div>
                            </Link>
                        </Card>);
                })}
                {/* <Card>
                    <Link to='#'>
                        <img src="https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="card img" />
                        <div className="card-text">
                            <h3>List Name</h3>
                            <p>privacy</p>
                        </div>
                    </Link>
                </Card> */}

            </ListContainer>
        </>

    );

}