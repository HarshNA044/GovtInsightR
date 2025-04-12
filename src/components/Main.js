import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const buttons = [
  {
    label: 'Central Govt',
    image: 'https://i.ibb.co/jZPFgbHG/250409-171027-0000.jpg',
    link: '/Central-Govt',
  },
  {
    label: 'State Govt',
    image: 'https://i.ibb.co/nqTs2zPF/2050409-171135-0000.png',
    link: '/State-Govt',
  },
];

const Main = () => {
  return (
    <div className='circles'>
      <div className="container">
        {buttons.map((btn, index) => (
          <Link style={{textDecoration: 'none'}} to={btn.link} key={index}>
            <button
              className="square-button"
              style={{ backgroundImage: `url('${btn.image}')` }}
            >
              {btn.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;