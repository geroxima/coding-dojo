'use client'
import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const [products, setProducts] = useState({
    title: '',
    price: '',
    description: '',
  })

  const refreshList = () => {
    setRefreshKey(oldKey => oldKey +1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/products/', products)
        .then(res => {
            console.log(res.data);
            props.refreshList();
        })
        .catch(err => console.log(err))
        .finally(() => {
            setProducts({
                title: '',
                price: '',
                description: '',
            });
    });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">Products</h1>
      <ProductForm handler={handleSubmit} refreshList={refreshList} />
      <ProductList refreshKey={refreshKey} />
    </div>
  );
}

