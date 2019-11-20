import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Styled from 'styled-components';

const ListContainer = Styled.div`
    display:flex;
    justify-content:space-around;
    align-content:center;
    flex-wrap:wrap;
    margin: 0 auto;

    
`;
const Card = Styled.div`
    width: 40%;
`;


export default function BucketList(){
    const [buketData, setBucketData] = useState([]);
    useEffect(()=>{
        Axios.get().then(resp => {
            console.log(resp);
        }).catch(error => console.log(`error: ${error}`));

    },[]);



    return (
        <>
        <h3>My Bucket List</h3>
        <ListContainer>
            <Card>
                <img src="https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="card img" />
                <div className="card-text">
                    <h4>List Name</h4>
                    <p>privacy</p>
                </div>
            </Card>
            <Card>
                <img src="https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="card img" />
                <div className="card-text">
                    <h4>List Name</h4>
                    <p>privacy</p>
                </div>
            </Card>
            
        </ListContainer>
        </>

    );

}