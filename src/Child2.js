import { useReducer } from "react";
import numberReducer from "./NumberReducer";


function Child2() {
    let [number, setnumber] = useReducer(numberReducer, 50 ) ;
    

    return (   
      <div className="child">
        This is Child #2. accessing value from ValueContext (global veriable) using Context API.<br/> 
        It is using "useReducer" hook to update the values. <br/> Number  = {number} <br/>
        <button onClick={ ()=> setnumber({type:"increment", value: 50}) }> Increment Number </button>
        <button onClick={ ()=> setnumber({type:"decrement", value: 50}) }> Decrement Number </button>
        <br/> <br/>  
      </div>
    );
  }
  
  export default Child2;
  