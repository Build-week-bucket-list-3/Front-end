import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';

export default function CreateBucketListItem() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async data => { console.log(data) };


    return (
        <div>
            <h2>Create Bucket List Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input className='form-control' type='text' name='name' id='name' ref={register({ required: true, })} />
                    {errors.name && 'Field is Required'}
                </div>
                <div className='form-group'>
                    <div className="form-check">
                        <input className="form-check-input" type='radio' name='public' id='public' value='public' ref={register({ required: true, })} />
                        {errors.privacy && 'Field is Required'}
                        <label htmlFor='public'>Public</label>
                    </div>
                    <div className='form-check'>
                        <input className="form-check-input" type='radio' name='privacy' id='private' value='private' ref={register({ required: true, })} />
                        {errors.privacy && 'Field is Required'}
                        <label htmlFor='private'>Private</label>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='journal'>Journal Entry</label>
                    <textarea className='form-control' name='journal' id='journal' ref={register}></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor='media'>Add a photo</label>
                    <input type='file' name='media' id='media' ref={register} />
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' type='submit'>Create</button>
                </div>
            </form>
        </div >
    );



}