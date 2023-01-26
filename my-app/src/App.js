import React, { useState } from 'react';
import ReactDOM from 'react-dom';

<link rel="stylesheet" href="index.css"></link>
const prices = {
  'Voiture location': 900,
  'Abonnement Netflux': 10,
  'Pc portable': 600,
  'Micro': 50
};

function App(props) {
  const [sortOrder, setSortOrder] = useState('asc'); //état initial est croissant
  const [produit, setProduit] = useState(['Voiture location', 'Abonnement Netflux', 'Pc portable', 'Micro']);

  const sortedProduit = [...produit].sort((a, b) => {
    if (sortOrder === 'asc') {
      return prices[a] - prices[b];
    } else {
      return prices[b] - prices[a];
    }
  });

  const listItems = sortedProduit.map((produit, index) =>
    <li key={index}>{produit}<button onClick={() => alert(`Payment for ${produit}`)}>Pay {prices[produit]} euros</button></li>
  );

  return (
    <div>
      <h1>C'est parti </h1>
      <div>
        <label>Filtrer par prix : </label>
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="asc">Croissant</option>
          <option value="desc">Décroissant</option>
        </select>
      </div>
        <div class="wave-container">
        <div class="wave"></div>
      </div>

      <ul>{listItems}</ul>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;


