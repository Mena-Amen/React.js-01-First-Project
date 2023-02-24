// import React, { useEffect, useState } from "react";
import UseFetchData from "../customHooks/FetchData";

const UseCustomHooks = () => {
  const [state] = UseFetchData("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      {state.map((ele) => {
        return <p>{ele.title}</p>;
      })}
    </div>
  );
};

export default UseCustomHooks;
