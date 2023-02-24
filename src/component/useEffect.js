import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Hello From useEffect File");
  }, [count]);
  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </Button>
      <label>{count}</label>
    </div>
  );
};

export default UseEffectExample;
