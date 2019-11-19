import React from 'react';
import useForm from 'react-hook-form';

const {register, handleSubmit, errors } = useForm();
const onSubmit = async data => {

}

export default function AddEntry(){
    return (
        <>
        <div><h2>Entry Name</h2></div>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <textarea className ="from-controle" name="description" id='description' placeholder='Enter description' ref={register({})}></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        </>



    );
}