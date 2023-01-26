import React from 'react';

const MyList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          {item.name} - {item.age}
        </li>
      ))}
    </ul>
  );
}

export default MyList;
