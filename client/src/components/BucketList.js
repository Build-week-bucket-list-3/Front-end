import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

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
    .card-text{
        h3{
            font-weight:500;
        }
        padding:1.5rem 1rem;
        text-align:left;
    }
`;


export default function BucketList(){
    const [bucketData, setBucketData] = useState([]);
    useEffect(()=>{
        Axios().then(resp => {
            console.log(resp);
        }).catch(error => console.log(`error: ${error}`));

    },[]);



    return (
        <>
        <h2>My Bucket List</h2>
        <Link to="#">Create a Bucket List</Link>
        <ListContainer>
            
            <Card>
            <Link to='#'>
                <img src="https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="card img" />
                <div className="card-text">
                    <h3>List Name</h3>
                    <p>privacy</p>
                </div>
            </Link>
            </Card>
            
            
            <Card>
            <Link to='#'>
                <img src="https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="card img" />
                <div className="card-text">
                    <h3>List Name</h3>
                    <p>privacy</p>
                </div>
            </Link>
            </Card>
           
            
        </ListContainer>
        </>

    );

}