'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'flowbite-react';
import PirateCard from '../components/PirateCard';

const PiratesPage = () => {
  const [pirates, setPirates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/pirates');
        const sortedPirates = response.data.sort((a, b) => a.pirateName.localeCompare(b.pirateName));
        setPirates(sortedPirates);

      } catch (error) {
        console.error('Error fetching pirates:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setPirates(pirates.filter(pirate => pirate._id !== id));
  };

  return (
    <div className="flex flex-col w-2/3 mt-5 m-auto">
      <div className="flex bg-yellow-700 p-5 justify-center">
        <h1 className="text-3xl font-bold mr-5 text-cyan-50">Pirate Crew</h1>
        <Button color="gray" href="/pirate/new">
          Add Pirate
        </Button>
      </div>

      <div className="bg-yellow-200 flex flex-col p-5">
        {pirates.map((pirate) => (
          <PirateCard key={pirate.id} pirate={pirate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PiratesPage;
