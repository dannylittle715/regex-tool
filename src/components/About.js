import React, { useState, useRef } from 'react';
import './../styles/About.css';
import './../styles/App.css';

const About = (props) => {
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);

  const handleButtonClick = (e) => {
    e.target.classList.toggle('active');
    setActive(!active);
  };

  return (
    <div className='about'>
      <button ref={buttonRef} onClick={handleButtonClick} className='button'>
        About {active ? '-' : '+'}
      </button>
      {active && <p className='content'>{props.content}</p>}
    </div>
  );
};

export default About;
