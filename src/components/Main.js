import React from 'react';
import './Main.css';

const buttons = [
  {
    label: 'Central Govt',
    image: 'https://i.ibb.co/jZPFgbHG/250409-171027-0000.jpg',
  },
  {
    label: 'State Govt',
    image: 'https://i.ibb.co/nqTs2zPF/2050409-171135-0000.png',
  },
];

const Main = () => {
  return (
    <div className='circles'><div className="container">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className="square-button"
          style={{ backgroundImage: `url('${btn.image}')`, }}
        >
          {btn.label}
        </button>
      ))}
    </div></div>
  );
};

export default Main;