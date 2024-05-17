"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const { useParams } = require("next/navigation")
import People from '@/components/People';
import ErrorMessage from '@/components/ErrorMessage';

export default function CustomURL() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://swapi.dev/api/people/${id}`);
          setData(response.data);
          setError(null);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            setError('Data not found');
          } else {
            setError('An error occurred');
          }
          setData(null);
        }
      };
  
      fetchData();
    }, [id]);
  
    if (error) {
      return <ErrorMessage/>;
    }
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    return <People data={data} />;
  }