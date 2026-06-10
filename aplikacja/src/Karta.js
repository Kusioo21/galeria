import React from 'react';

function Karta({ zdjecie, pobierz }) {
  return (
    <div style={{ margin: '10px', textAlign: 'center', border: '1px solid #ccc', padding: '10px' }}>
      <img 
        src={`/assets/${zdjecie.filename}`} 
        alt={zdjecie.alt} 
        style={{ width: '200px', height: '150px', objectFit: 'cover' }} 
      />
      <h4>Pobrania: {zdjecie.downloads}</h4>
      <button onClick={() => pobierz(zdjecie.id)}>Pobierz</button>
    </div>
  );
}

export default Karta;