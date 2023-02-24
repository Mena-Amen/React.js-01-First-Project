import React, { useRef, useContext } from "react";
import { Button } from "react-bootstrap";
import { ColorContext } from "./useContext";

const UseRefExample = () => {
  const { changeData } = useContext(ColorContext);
  const valueInput = useRef(null);
  const foucsEvent = () => {
    valueInput.current.focus();
    console.log(valueInput.current.value);
    changeData(Math.random(), valueInput.current.value);
  };
  return (
    <div>
      <input type="text" ref={valueInput} />
      <Button onClick={foucsEvent}>Focus</Button>
    </div>
  );
};

export default UseRefExample;
