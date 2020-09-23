import React, { useEffect } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import Prism from 'prismjs';
import '../prism/prism.css';
import '../styles/CopyButton.css'

const PatternDisplay = ({ pattern }) => {
  
    useEffect(() => {
    Prism.highlightAll();
  }, [pattern]);

  const onCopyClick = () => {
      navigator.clipboard.writeText(pattern.toString())
        .then(() =>  {
            //display success message    
        }, () => {
            console.log('failed to copy to clipboard.')
        //display failure message
      });
  }

  return (
    <div>
      <h3>Pattern:</h3>
      <pre className='parent'>
        <code className='language-javascript'>{pattern.toString()}</code>
        <FaRegCopy className='copy-button' onClick={onCopyClick}/>
      </pre>
    </div>
  );
};

export default PatternDisplay;