const Card = ({ card, handleFavorite }) => {
  const handleClick = () => {
    window.location.replace(`http://localhost:3000/pokemon/${card.id}`);
  };

  return (
    <div
      style={{
        flex: "0 0 calc(25.33% - 20px)",
        margin: '40px',
        border: '1px solid black',
        background: 'white',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '5px' // add border-radius
      }}
    >
      <h2>{card.name}</h2>
      <h4>#{card.id}</h4>
      <img src={card.image} alt={card.name} style={{ width: '100%', height: '50%' }} />
      <button onClick={() => handleFavorite(card.id, card.name)} style={{ background: "white", border: "none" }}>
        <i className={card.favorite ? "fa-solid fa-heart text-danger fa-lg" : "fa-regular fa-heart fa-lg"}></i>
      </button>
      <button className='btn btn-primary mt-3' onClick={handleClick}>Read more</button>
    </div>
  );
};

export default Card;
