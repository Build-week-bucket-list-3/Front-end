import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function BucketList(){
    const [buketData, setBucketData] = useState([]);
    useEffect(()=>{
        Axios.get('https://gcgsauce-bucketlist.herokuapp.com/admin/bucketlists/all').then(resp => {
            console.log(resp);
        }).catch(error => console.log(`error: ${error}`));

    },[]);



    return (
        <>
        </>

    );

}