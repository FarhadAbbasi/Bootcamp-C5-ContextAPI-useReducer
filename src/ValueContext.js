
import React from "react";
//import { createContext } from "react";

const ValueContext= React.createContext(45, ()=> {}) ; // THis passed function will not be used if we provide value through "ValueContext.Provider"

export default ValueContext ;