import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  const [fetching, setFetching] = useState(false);

  const handleFetchClick = () => {
    setFetching(true);
  };

  return (
    <div className="App">
      <button className='fetch-button' onClick={handleFetchClick} disabled={fetching}>
      Fetch Pokémon</button>
      {fetching && <PokemonList />}
    </div>
  );
}

export default App;
