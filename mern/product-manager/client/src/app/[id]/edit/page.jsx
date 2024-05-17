'use client'
import React, { useState, useEffect } from "react";
import ProductForm from "../../components/ProductForm";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
const { useParams, useRouter } = require("next/navigation")

const Product = () => {
    const router = useRouter();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                console.log(res.data);
                router.push(`/${id}`);
            })
            .catch(err => console.log(err))
    }

    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    }

    return(
        <div className="flex flex-col items-center mt-10">                  
            <h1 className="text-3xl font-bold">Edit Product</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <div>
                    <Label className="font-semibold" value="Title"/>
                    <TextInput value={product.title || ""} onChange={handleChange} name="title"/>
                </div>
                <div>
                    <Label className="font-semibold" value="Price"/>
                    <TextInput value={product.price || ""} onChange={handleChange} name="price"/>
                </div>
                <div>
                    <Label className="font-semibold" value="Description"/>
                    <TextInput value={product.description || ""} onChange={handleChange} name="description"/>
                </div>
                <Button pill color="light" type="submit" className="mt-3 font-semibold">
                    Done
                </Button>
            </form>

        </div>
    );
}

export default Product;