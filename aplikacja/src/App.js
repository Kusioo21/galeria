import React, { useState } from 'react';
import Karta from './Karta'; 

function App() {
  const [zdjecia, setZdjecia] = useState([
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
  ]);
  
  const [pokazKwiaty, setPokazKwiaty] = useState(true);
  const [pokazZwierzeta, setPokazZwierzeta] = useState(true);
  const [pokazSamochody, setPokazSamochody] = useState(true);

  const obsluzPobranie = (id) => {
    setZdjecia(zdjecia.map(z => z.id === id ? {...z, downloads: z.downloads + 1} : z));
  };

  return (
    <div>
      <h1>Galeria ze zdjęciami</h1>
      <input type="checkbox" checked={pokazKwiaty} onChange={() => setPokazKwiaty(!pokazKwiaty)} /> Kwiaty
      <input type="checkbox" checked={pokazZwierzeta} onChange={() => setPokazZwierzeta(!pokazZwierzeta)} /> Zwierzęta
      <input type="checkbox" checked={pokazSamochody} onChange={() => setPokazSamochody(!pokazSamochody)} /> Samochody

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {zdjecia.map(z => {
          if ((z.category === 1 && pokazKwiaty) || (z.category === 2 && pokazZwierzeta) || (z.category === 3 && pokazSamochody)) {
            return <Karta key={z.id} zdjecie={z} pobierz={obsluzPobranie} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;