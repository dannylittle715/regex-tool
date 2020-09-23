import React, { useState, useRef } from 'react';
import './../styles/About.css';
import './../styles/App.css';

const About = ({ content, title }) => {
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);
  if (!title) {
    title = 'About';
  }

  const handleButtonClick = (e) => {
    e.target.classList.toggle('active');
    setActive(!active);
  };

  return (
    <div className='about'>
      <button ref={buttonRef} onClick={handleButtonClick} className='button'>
        {title} {active ? ' -' : ' +'}
      </button>
      <br />
      {active && content}
    <hr/>
    </div>
  );
};

export default About;
