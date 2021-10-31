import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./AddANewService.css";

const AddANewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:4000/tours', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('successfully added a Service');
                    reset();
                }
            })

    };
    return (
        <div className="add-service">
            <h2>Add A New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <input {...register("places")} placeholder="places" />
                <textarea className="textarea" {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="Url" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddANewService;