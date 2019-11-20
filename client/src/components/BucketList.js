import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const Blheader = Styled.div`

    text-align:center;
    h2{
        margin-bottom: 1rem;
    }
`;

const ListContainer = Styled.div`
    display:flex;
    justify-content:space-around;
    align-content:center;
    flex-wrap:wrap;
    margin: 0 auto;
    

`;
const Card = Styled.div`
    width: 45%;
    background-color:#E5E5E5;
    color:#333;
    margin:1.8rem 0;
    box-shadow:0 .2rem .5rem rgba(000,000,000,0.2);
    a{
        color:inherit;
    }
    .card-text{
        h3{
            font-weight:500;
        }
        padding:1.5rem 1rem;
        text-align:left;
    }
`;


export default function BucketList() {
    const [bucketData, setBucketData] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get("/users/all")
            .then(res => setBucketData(res.data)) 
            .catch(err => console.log(err.message));

    }, []);

    function getBucketList(event) {
        event.preventDefault();

        axiosWithAuth()
            .get("/users/all")
            .then(res => console.log(res))
            .catch(err => console.log(err.message));
    }

    return (
        <>  
            <Blheader>
                <h2>My Bucket List</h2>
                <Link to="/bucketlist/create" className=" btn btn-secondary">Create a Bucket List</Link>
            </Blheader>
            {console.log(bucketData)}
            <ListContainer>
                
                {bucketData.map(item =>{
                    return (
                    <Card key={item.bucketListId}>
                        <Link to='/bucketlist/view'>
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


               

                {/* <button onClick={getBucketList}>Test</button> */}
            </ListContainer>
        </>

    );

}