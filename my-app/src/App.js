import React from 'react';
import ReactDOM from 'react-dom';
<link rel="stylesheet" href="index.css"></link>
const prices = {
  'Voiture location': 900,
  'Abonnement Netflux': 10,
  'Pc portable': 600,
  'Micro': 50
};

function App(props) {
  const listItems = produit.map((produit, index) =>
    <li key={index}>{produit}<button onClick={() => alert(`Payment for ${produit}`)}>Pay {prices[produit]} euros</button></li>
  );
  
  return (
    <div>
      <h1>C'est parti </h1>
      <ul>{listItems}</ul>
    </div>
  );
}
const produit = ['Voiture location', 'Abonnement Netflux', 'Pc portable', 'Micro'];
ReactDOM.render(
  <App produit={produit} />,
  document.getElementById('root')
);

export default App;

