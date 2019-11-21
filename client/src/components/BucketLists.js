import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { ListContainer, Card } from '../style/GlobalStyles';
import { BucketListsContext } from '../context/BucketListsContext';


export default function BucketList() {
    const { bucketLists, refreshBucketLists } = useContext(BucketListsContext);
    useEffect(() => {
        refreshBucketLists();
    }, []);
//   {`/bucketlist/${item.id}`
    return (
        <>
            <h2 className="text-center ">My Bucket Lists</h2>
            <Link to="/bucketlist/new" className="btn btn-secondary btn-block">Create a Bucket List</Link>

            {console.log(bucketLists)}
            <ListContainer>

                {bucketLists.map(item => {
                    return (
                        <Card key={item.id}>
                            <Link to={{ pathname:`bucketlist/${item.id}`, state: { status: `${item.title}`}  }}>
                                <img src="https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="card img" />
                                <div className="card-text">
                                    <h3>{item.title}</h3>
                                </div>
                            </Link>
                        </Card>);
                })}

            </ListContainer>
        </>

    );

}