import React, {useState,useEffect} from 'react';

export default function CreateBucketListItem(){
    const [bucketListItems, setBucketListItems] = useState({});


    return(
        <div>
            <form>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' id='name' />
                <label>Public
                <input type='radio' name='privacy' id='privacy' value='public'/>
                </label>
                <label>Private
                <input type='radio' name='privacy' id='privacy' value='private' />
                </label>
                <label htmlFor='journal'>Journal Entry</label>
                <textarea  name='journal' id='journal'></textarea>
                <input type='file' name='media' id='media'/>
                <button type='submit'>Create</button>
            </form>
        </div>
    );



}