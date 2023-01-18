import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
Person;

function App() {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState(false);
  const personName = {
    first: 'Lex',
    last: 'Luthor',
  };
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Barry',
      last: 'Allen',
    },
  ];
  return (
    <div>
      <button onClick={() => setLogin(!login)}>login</button>
      <div className="app">
        {login ? (
          <div>
            <Greet name="yogi" pesan={20} lagiLogin={true} />
          </div>
        ) : (
          <div>
            <p>hello</p>
            <p>utang lu ada {count}</p>
            <button onClick={() => setCount(utangpertama => utangpertama + 1)}>
              utang dong
            </button>
            <hr />
            <button onClick={() => setCount(0)}>bayar utang?</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
