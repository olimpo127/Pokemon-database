import React, { useState, useEffect } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleFavorite = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          favorite: !card.favorite
        }
      } else {
        return card;
      }
    });
    setCards(newCards);
  };

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const handleRemoveFavorite = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          favorite: false
        }
      } else {
        return card;
      }
    });
    setCards(newCards);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1008');
      const data = await response.json();
      const results = data.results;
      const pokemon = await Promise.all(results.map(async (result) => {
        const response = await fetch(result.url);
        const data = await response.json();
        return {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          favorite: false
        }
      }));
      setCards(pokemon);
    };
    fetchPokemon();
  }, []);

  const favoriteCards = cards.filter(card => card.favorite);
  const favoriteNames = favoriteCards.map(card => ({id: card.id, name: card.name}));

  return (
    <div>
      <Navbar
        favoriteNames={favoriteNames}
        showFavorites={showFavorites}
        handleShowFavorites={handleShowFavorites}
        handleRemoveFavorite={handleRemoveFavorite}
      />
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card) => (
          <Card key={card.id} card={card} handleFavorite={handleFavorite} />
        ))}
      </div>
    </div>
  );
};

export default Home;