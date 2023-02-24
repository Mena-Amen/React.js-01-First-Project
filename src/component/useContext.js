import React, { createContext, useState } from "react";

// 1- Create Context
const ColorContext = createContext();
// 2- Create Provider
const UseContextProvider = ({ children }) => {
  // 6- Update Data in Context
  const [data, setData] = useState({ id: "24", name: "Mena" });
  const changeData = (id, name) => {
    setData({ id, name });
  };
  return (
    <ColorContext.Provider value={{ data, changeData }}>
      {children}
    </ColorContext.Provider>
  );
};
// 3- Export Context to use, Provider to Wrap Component
export { UseContextProvider, ColorContext };
