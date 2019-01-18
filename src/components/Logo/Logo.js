import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
  return (
  // Logo
  <div className='ma4 mt0'>
    <Tilt className="Tilt br2 shadow-2 pa3" options={{
        max: 25
      }} style={{
        height: 150,
        width: 150
      }}>
      <div className="Tilt-inner">
        <img alt='Logo' src={brain}/>
      </div>
    </Tilt>
  </div>);
}

export default Logo;
