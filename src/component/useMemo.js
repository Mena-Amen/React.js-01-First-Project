import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  var RandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(0);
  const myResults = useMemo(() => {
    return (
      <div style={{ color: RandomColor }}>
        Your Value is {counter} = {counter * 2}
      </div>
    );
  }, [counter]);
  return (
    <div>
      {myResults}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setText(text + 1);
        }}
      >
        Test
      </button>
    </div>
  );
};
export default UseMemoExample;
