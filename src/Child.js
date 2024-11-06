import { useContext } from "react";
import ValueContext from "./ValueContext";



function Child() {
    let val=useContext(ValueContext) ;
    let updatevalue= val[1];
    return (   
      <div className="child"> 
          This is Child #1. accessing value from ValueContext (global veriable) using Context API. <br/> 
          It is using "useState" hook to update the values. <br/>  Val  = {val} . <br/>
          <button onClick={ ()=> updatevalue(++val[0])} > Update Value </button>
          <br/> <br/> 
      </div>
    );
  }
  
  export default Child;
  