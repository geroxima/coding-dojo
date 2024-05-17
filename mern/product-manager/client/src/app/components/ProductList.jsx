"use client";
import React, { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import axios from "axios";
import Link from "next/link";

const ProductList = (props, refreshKey) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [props.refreshKey]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        axios
          .get("http://localhost:8000/api/products")
          .then((res) => setProducts(res.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-2 mb-5">
      {products.map((product, idx) => {
        return (
          <div
            key={idx}
            className="flex items-center align-center border-solid border-gray-200 border-[.5px] rounded-md p-2 justify-between mb-2"
          >
            <Link href={`/${product._id}`}>
              <h1 className="font-semibold mr-2">{product.title}</h1>
            </Link>
            <DeleteButton handler={() => handleDelete(product._id)} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
