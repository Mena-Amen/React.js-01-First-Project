import React, { useState } from "react";
import { Button } from "react-bootstrap";

const StateExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("text");
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
      <label>
        {text} Your Count is {count}
      </label>
      <input type=" text" value={text} onChange={inputHandler} />
    </div>
  );
};
export default StateExample;
