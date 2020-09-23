import React, { useState, useEffect } from 'react';
import InputMatch from './InputMatch';
import PatternDisplay from './PatternDisplay';
import About from './About';
import {usePassword} from '../hooks/usePassword'

const about = 
<p className='content'>
  This is a customizable regex pattern for a password with different customizable options.
   You can enforce a minimum and maximum character count, and require a digit.
    The pattern changes based on the options selected.
</p>

const Password = () => {
  const [requireDigits, setRequireDigits] = useState(false);
  const [requireMinLength, setRequireMinLength] = useState(false);
  const [minLength, setMinLength] = useState(8);
  const [requireMaxLength, setRequireMaxLength] = useState(false);
  const [maxLength, setMaxLength] = useState(14);
  const [pattern, setPattern] = usePassword()

  useEffect(() => {
    setPattern({requireDigits, requireMinLength, requireMaxLength, minLength, maxLength,})
  }, [requireDigits, requireMinLength, requireMaxLength, minLength, maxLength]);

  return (
    <div>
      <h2>Password</h2>
      <InputMatch pattern={pattern} placeholder='password' />
      <PatternDisplay pattern={pattern} />
      <h3>Options:</h3>

      <div>
        <input className='checkbox' type='checkbox' id='requireMinLength' checked={requireMinLength} onChange={(e) => setRequireMinLength(e.target.checked)} />
        <label htmlFor='requireMinLength'>Minimum of </label>
        <input type='number' id='minLength' min='1' max='100' value={minLength} onChange={(e) => setMinLength(Number(e.target.value))} />
        <label htmlFor='minLength'> Character{minLength > 1 ? 's' : ''}</label>
      </div>
      <div>
        <input className='checkbox' type='checkbox' id='requireMaxLength' checked={requireMaxLength} onChange={(e) => setRequireMaxLength(e.target.checked)} />
        <label htmlFor='requireMinLength'>Maximum of </label>
        <input type='number' id='maxLength' min='1' max='100' value={maxLength} onChange={(e) => setMaxLength(Number(e.target.value))} />
        <label htmlFor='maxLength'> Character{minLength > 1 ? 's' : ''}</label>
      </div>
      <div>
        <input className='checkbox' type='checkbox' id='requireDigits' checked={requireDigits} onChange={(e) => setRequireDigits(e.target.checked)} />
        <label htmlFor='requireDigits'>Require at least 1 digit </label>
      </div>
    
      <About content={about} />
    </div>
  );
};

export default Password;
