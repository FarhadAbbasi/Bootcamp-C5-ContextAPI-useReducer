//import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  let value = useState(450); 

  // If <ValueContext.Provider> is removed from here, then all the childs will access the default value given in ValueContext component only and is of no use.
// Which means .Provider makes this ValueContext a dynamic global veriable accross the app.
  return (   
    <ValueContext.Provider value={value}>       
      <div>
        This is App Component. 
        <Parent> </Parent>

 
       <br/> <br/>
       <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
         >
            Learn React
       </a>
     </div>
    </ValueContext.Provider>

  );
}

export default App;
 
// https://github.com/FarhadAbbasi/Bootcamp-C5-ContextAPI-useReducer.git
