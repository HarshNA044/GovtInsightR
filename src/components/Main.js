import React from 'react';
import './Main.css';

const buttons = [
  {
    label: 'Central Govt',
    image: 'https://i.ibb.co/VpNPqK1X/20250407-175241-0000.png',
  },
  {
    label: 'State Govt',
    image: 'https://i.ibb.co/z3HL7b2/20250407-183023-0000.png',
  },
];

const Main = () => {
  return (
    <div className="container">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className="square-button"
          style={{ backgroundImage: `url('${btn.image}')`, }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default Main;