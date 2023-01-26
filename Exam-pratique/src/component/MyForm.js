import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
export default MyForm;
