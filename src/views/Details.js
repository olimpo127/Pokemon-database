import React, { useState, useEffect } from 'react';

const Details = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(response => response.json())
      .then(data => {
        const types = data.types.map(type => type.type.name);
        const stats = data.stats.map(stat => {
          return { name: stat.stat.name, value: stat.base_stat };
        });
        setPokemon({ ...data, types, stats });
      })
      .catch(error => console.error(error));
  }, []);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const { name, sprites, height, weight, abilities, types, stats } = pokemon;

  return (
    <div className='d-flex flex-direction-column' style={{ backgroundColor: 'red', color: 'white' }}>
      <div className='col-6'>
        <img src={sprites.front_default} alt={name} style={{ width: '100%' }} />
      </div>
      <div className='col-6'>
        <h1 className='mb-5 mt-5' style={{color: "black"}}>{name}</h1>
        <h4><strong>Features</strong></h4>
        <p style={{ backgroundColor: 'black'}} className="me-5">Height: {height}</p>
        <p style={{ backgroundColor: 'black'}} className="me-5">Weight: {weight}</p>
        <p style={{ backgroundColor: 'black'}} className="me-5">Types: {types.join(', ')}</p>
        <h4>Abilities:</h4>
        <ul style={{ backgroundColor: 'black'}} className="me-5">
          {abilities.map(ability => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
        <h4>Stats:</h4>
        <ul style={{ backgroundColor: 'black'}} className="me-5">
          {stats.map(stat => (
            <li key={stat.name}>
              {stat.name}: {stat.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
