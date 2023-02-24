import React, { useReducer } from "react";

const initialValue = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "reset":
      return { counter: 0 };
    default:
      return { state };
  }
};

const UseReducerExample = () => {
  //   const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      Your value is : {state.counter}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducerExample;
