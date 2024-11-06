

//With the use of useReducer, you can perform multiple actions(add, sub, multiply) to a value unlike useState in which only one action can be performed at a time.
// It is a pure fuction, does not update any external veriable, it just return a new state.
// useReducer has state managment of a whole application, not just a component like useState.

const numberReducer= (state, action) => {
    switch (action.type) {
        case 'increment':
        return state + action.value 
        case 'decrement':
        return state - action.value
        default:
    }
}

export default numberReducer ;