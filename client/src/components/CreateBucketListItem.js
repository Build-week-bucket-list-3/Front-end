import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useForm from 'react-hook-form';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { BucketListsContext } from '../context/BucketListsContext';

export default function CreateBucketListItem() {
    const { register, handleSubmit, errors } = useForm();
    const params = useParams();
    const history = useHistory();
    const { refreshBucketLists } = useContext(BucketListsContext);

    const onSubmit = async data => {
        console.log(data)
        const payload = {
            bucket_id: params.id,
            item_name: data.name,
            journal_entry: data.journal,
            photo: data.media.trim()
        }

        axiosWithAuth()
            .post('/items', payload)
            .then(() => {
                refreshBucketLists();
                history.push(`/bucketlist/${params.id}`);
            })
    };

    return (
        <div>
            <h2>Create Bucket List Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        ref={register({ required: true, })} />
                    {errors.name && 'Field is Required'}
                </div>
                <div className='form-group'>
                    <label htmlFor='journal'>Journal Entry</label>
                    <textarea
                        className='form-control'
                        name='journal'
                        ref={register}></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor='media'>Add photo</label>
                    <input
                        className='form-control'
                        type='text'
                        name='media'
                        placeholder='http://'
                        ref={register} />
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' type='submit'>Create</button>
                </div>
            </form>
        </div >
    );



}
