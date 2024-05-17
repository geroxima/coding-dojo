"use client";
import React, { useState } from "react";
import axios from "axios";
import People from "@/components/People";
import Films from "@/components/Films";
import Starships from "@/components/Starships";
import Vehicles from "@/components/Vehicles";
import Planets from "@/components/Planets";
import Species from "@/components/Species";
import ErrorMessage from "@/components/ErrorMessage";

export default function Home() {
  const [category, setCategory] = useState("people");
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const componentMap = {
    films: Films,
    people: People,
    planets: Planets,
    species: Species,
    starships: Starships,
    vehicles: Vehicles,
  };

  const RenderComponent = componentMap[category];

  const [categoryChanged, setCategoryChanged] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCategoryChanged(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setData(null);
    setError(null);
    try {
      const response = await axios.get(`https://swapi.dev/api/${category}/${id}`);
      setData(response.data);
      setCategoryChanged(false); // Set categoryChanged to false after fetching the data
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Data not found");
      } else {
        setError("An error occurred");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          id="star-wars-select"
          onChange={handleCategoryChange}
        >
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
        </select>
        <input
          type="number"
          id="star-wars-search"
          placeholder="id"
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error ? <ErrorMessage message={error} /> : !categoryChanged && data && <RenderComponent data={data} />}
    </div>
  );
}
