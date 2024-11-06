//import { useContext } from "react";
import Child from "./Child";
import Child2 from "./Child2";
//import ValueContext from "./ValueContext";



function Parent() {
//    let value= useContext(ValueContext) ;

  return (   
    <div>
        This is Parent component.<br/> <br/> 
        <Child> </Child> <br/>
        <Child2> </Child2>
    </div>
  );
}

export default Parent;
