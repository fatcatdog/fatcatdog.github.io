import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return(
    <div className="everythingInHeader">
      <ul className="linksInHeader">
         <li><Link to="/about">About</Link></li>
         <li><Link to="/projects">Coding Projects</Link></li>
      </ul>
    </div>
  )
}

export default Header;
