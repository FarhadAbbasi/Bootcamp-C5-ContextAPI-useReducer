//import { useContext } from "react";
import Child from "./Child";
//import ValueContext from "./ValueContext";



function Parent() {
//    let value= useContext(ValueContext) ;

  return (   
    <div>
        This is Parent component.<br/> <br/> 
        <Child> </Child>
    </div>
  );
}

export default Parent;
