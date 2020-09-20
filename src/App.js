import React from 'react';
import SimpleSection from './components/SimpleSection';
import Password from './components/Password';
import './styles/App.css';

const simpleSections = [
  {
    title: 'English Full Name',
    shortTitle: 'name',
    pattern: /^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*)+$/,
    about:
      'This pattern allows for at least two names containing hyphens and apostrophes within the middle of each name, but not starting or ending a name. It will accept names like: "Joe Smith", "J S", "j-oe s\'mith".',
    placeholder: 'John Doe',
  },
  {
    title: 'Phone Number',
    shortTitle: 'phone',
    pattern: /^(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    about:
      'This pattern allows for nine digit phone numbers, possibly with the US country code 1 preceeding it. It allows for spaces, periods, hyphens, or nothing separating the possible country code, area code, middle three, and last four digits. The area code may be surrounded by parentheses.',
    placeholder: '(123) 456-7890',
  }, 
  {
    title: 'Email Address',
    shortTitle: 'email',
    pattern: /^\w+@\w+\.\w+$/,
    about:
    'This pattern allows for one or more word characters (uppercase and lowercase letters, including underscores), followed by an ampersand, one or more word characters, a period, and one or more word characters.',
    placeholder: 'foo@bar.baz',
  }// TODO: Add option to add different country codes: https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json
  // {
  //   title: "Custom Password",
  //   shortTitle: "password",
  //   pattern: "",
  //   about: "",
  // },
];

function App() {
  return (
    <div className='App'>
      <h1>Regex Tool</h1>
      <Password />
      {simpleSections.map((section) => (
        <SimpleSection key={section.shortTitle} section={section} />
      ))}
    </div>
  );
}

export default App;
