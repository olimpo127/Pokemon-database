import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(pokemonUrl)
      .then(response => response.json())
      .then(data => {
        const types = data.types.map(type => type.type.name);
        const stats = data.stats.map(stat => {
          return { name: stat.stat.name, value: stat.base_stat };
        });
        setPokemon({ ...data, types, stats });
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const { name, sprites, height, weight, abilities, types, stats } = pokemon;

  return (
    <div className='d-flex flex-column' style={{ height: '100vh' }}>
      <Navbar 
        favoriteNames={[]} 
        showFavorites={false} 
        handleShowFavorites={() => {}} 
        handleRemoveFavorite={() => {}}
      />
      <div className='flex-grow-1 d-flex flex-row' style={{ backgroundColor: 'red', color: 'white' }}>
        <div className='col-6'>
          <img src={sprites.front_default} alt={name} style={{ width: '100%' }} />
        </div>
        <div className="col-6 d-flex flex-column">
  <h1 className="mb-5 mt-5" style={{ color: "#000" }}>
    {name}
  </h1>
  <div className="d-flex flex-column">
    <h4 style={{ color: "#fff" }}>
      <strong>Features</strong>
    </h4>
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <p className="me-5">Height: {height}</p>
      <p className="me-5">Weight: {weight}</p>
      <p className="me-5">Types: {types.join(", ")}</p>
    </div>
  </div>
  <div className="d-flex flex-column">
    <h4 style={{ color: "#fff" }}>Abilities:</h4>
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <ul className="me-5">
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  </div>
  <div className="d-flex flex-column">
    <h4 style={{ color: "#fff" }}>Stats:</h4>
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <ul className="me-5">
        {stats.map((stat) => (
          <li key={stat.name}>
            {stat.name}: {stat.value}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Details;
