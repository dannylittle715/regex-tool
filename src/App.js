import React from 'react';
import SimpleSection from './components/SimpleSection';
import Password from './components/Password';
import About from './components/About';
import './styles/App.css';

const description = (
  <p className='content'>
    This is a tool to access some regular expression patterns commonly used in
    data validation. The white button allows you to copy any pattern.
  </p>
);

const simpleSections = [
  {
    title: 'English Full Name',
    shortTitle: 'name',
    pattern: /^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*)+$/,
    about: (
      <p className='content'>
        This pattern allows for at least two names containing hyphens and
        apostrophes within the middle of each name, but not starting or ending a
        name. It will accept names like: "John Doe", "J D", "j-ohn d'oe".
      </p>
    ),
    placeholder: 'John Doe',
  },
  {
    title: 'Phone Number',
    shortTitle: 'phone',
    pattern: /^(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    about: (
      <p className='content'>
        This pattern allows for nine digit phone numbers, possibly with the US
        country code 1 preceeding it. It allows for spaces, periods, hyphens, or
        nothing separating the possible country code, area code, middle three,
        and last four digits. The area code may be surrounded by parentheses.
      </p>
    ),
    placeholder: '(123) 456-7890',
  }, // country codes: https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json
  {
    title: 'Email Address',
    shortTitle: 'email',
    pattern: /^\w+@\w+\.\w+$/,
    about: (
      <p className='content'>
        This pattern allows for one or more word characters (uppercase and
        lowercase letters, including underscores), followed by an ampersand, one
        or more word characters, a period, and one or more word characters.
      </p>
    ),
    placeholder: 'foo@bar.baz',
  },
];

function App() {
  return (
    <div className='App'>
      <h1>Regex Tool</h1>
      <About content={description} title='What is this?' />
      <Password />
      {simpleSections.map((section) => (
        <SimpleSection key={section.shortTitle} section={section} />
      ))}
    </div>
  );
}

export default App;
