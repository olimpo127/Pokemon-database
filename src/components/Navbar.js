import React from 'react';

const Navbar = ({ favoriteNames, showFavorites, handleShowFavorites, handleRemoveFavorite }) => {
  const favoriteCount = favoriteNames.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ display: 'flex', alignItems: 'center' }}>
      <a className="navbar-brand ms-3" href="http://localhost:3000/">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '2rem' }}>
        {showFavorites ? (
          <div className='bg-dark'>
            {favoriteNames.length > 0 ? (
              <ul className="favorite-list">
                {favoriteNames.map((favorite) => (
                  <li key={favorite.id} className="favorite-item">
                    {favorite.name}
                    <button onClick={() => handleRemoveFavorite(favorite.id)} className="bg-danger"><i class="fa-solid fa-trash"></i></button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-list">Empty</p>
            )}
            <button className='btn btn-secondary mt-2' onClick={handleShowFavorites}>
              Close Favorite Cards
            </button>
          </div>
        ) : (
          <button className='btn btn-success' onClick={handleShowFavorites}>
            Favorite Cards ({favoriteCount})
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
