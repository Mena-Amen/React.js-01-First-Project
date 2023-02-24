import React, { useContext } from "react";
import { ColorContext } from "./component/useContext";
// import StateExample from "./component/useState";
// import UseEffectExample from "./component/useEffect";
// import UseRefExample from "./component/useRef";
// import UseMemoExample from "./component/useMemo";
// import UseReducerExample from "./component/useReducer";
// import UseCustomHooks from "./component/useCustomHooks";
import FetchAxios from "./component/FetchAxios";

const App = () => {
  // 5- Use Context
  // const { data } = useContext(ColorContext);
  // changeData("green");
  return (
    <div>
      {/* <StateExample />
      <UseEffectExample />
      <UseRefExample />
      {data.name}
      {data.id}
      <UseMemoExample />
      <UseReducerExample /> */}
      {/* <UseCustomHooks /> */}
      <FetchAxios />
    </div>
  );
};

export default App;
