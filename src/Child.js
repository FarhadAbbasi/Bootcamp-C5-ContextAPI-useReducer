import { useContext } from "react";
import ValueContext from "./ValueContext";



function Child() {
    let val=useContext(ValueContext) ;
    let updatevalue= val[1];
    return (   
      <div>
          This is Child  component accessing value from ValueContext (global veriable) using Context API. <br/>  Val  = {val} + {val[0]} +  {val[1]}. <br/>
          <button onClick={ ()=> updatevalue(++val[0])} > Update Value </button>
      </div>
    );
  }
  
  export default Child;
  