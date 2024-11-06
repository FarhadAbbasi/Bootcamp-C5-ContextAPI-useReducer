import { useState } from 'react';
import './App.css';
import Parent from './Parent';

function App() {
let [number, setnumber] = useState(45);

  return (   
    <div>
      Hello World
      <Parent num={number} ></Parent>
      <button onClick={ ()=> setnumber(++number)}> Update Number </button>


      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
    </div>
  );
}

export default App;
 
// https://github.com/FarhadAbbasi/Bootcamp-C5-ContextAPI-useReducer.git
