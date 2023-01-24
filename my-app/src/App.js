import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) =>
    <li key={index}>{number}</li>
  );
  return (
    <div>
      <h1>C'est parti </h1>
      <ul>{listItems}</ul>
    </div>
  );
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <App numbers={numbers} />,
  document.getElementById('root')
);

export default App;
