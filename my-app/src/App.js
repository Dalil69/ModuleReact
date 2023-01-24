import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
  const listItems = produit.map((produit, index) =>
    <li key={index}>{produit}<button onClick={() => alert(`Payment for ${produit}`)}>Pay</button></li>
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
