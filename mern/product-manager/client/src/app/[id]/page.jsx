'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import ProductForm from "../components/ProductForm";
const { useParams, useRouter } = require("next/navigation")

const Product = () => {
    const router = useRouter();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res);
                router.push('/');
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold">Product</h1>
            <div className="mt-5">
                <p className="text-lg font-semibold">Title: {product.title}</p>
                <p className="text-lg font-semibold">Price: {product.price}</p>
                <p className="text-lg font-semibold">Description: {product.description}</p>
            </div>
                <DeleteButton handler={() => handleDelete(product._id)} />
        </div>
    );
}

export default Product;