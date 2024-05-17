'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Label, TextInput, Button } from "flowbite-react";

const ProductForm = (product, {handler}, refreshList) => {
    const [products, setProducts] = useState({
        title: product.title || '',
        price: product.price || '',
        description: product.description || '',
    });

        
    const handleChange = (event) => {
        setProducts({
            ...products,
            [event.target.name]: event.target.value
        });
    }

    return(
        <form onSubmit={ handler } className="flex flex-col justify-center items-center">
            <div>
                <Label className="font-semibold" value="Title"/>
                <TextInput value={products.title || ''} onChange={handleChange} name="title"  />
            </div>
            <div>
                <Label className="font-semibold" value="Price"/>
                <TextInput value={products.price || ''} onChange={handleChange} name="price"/>
            </div>
            <div>
                <Label className="font-semibold" value="Description"/>
                <TextInput value={products.description || ''} onChange={handleChange} name="description"/>
            </div>
            <Button pill color="light" type="submit" className="mt-3 font-semibold"> Done </Button>
        </form>
    );
};

export default ProductForm;