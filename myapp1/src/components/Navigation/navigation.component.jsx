import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><a href="/#" onClick={(e) => e.preventDefault()}>Home</a></li>
        <li><a href="/#" onClick={(e) => e.preventDefault()}>About</a></li>
        <li><a href="/#" onClick={(e) => e.preventDefault()}>Services</a></li>
        <li><a href="/#" onClick={(e) => e.preventDefault()}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
