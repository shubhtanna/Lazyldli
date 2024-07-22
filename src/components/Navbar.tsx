import React from 'react';
import svg from '../Assets/Group 9 (1).svg';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div>

      <div className='nav-div'>

        <div className="logo-name-div">
          <span className='logo-name'>Gilly's</span>
          <span>Koramangala</span>
        </div>

        <img src={svg} alt="logo-svg" />
      </div>




    </div>
  )
}

export default Navbar