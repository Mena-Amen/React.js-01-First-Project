import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAxios = () => {
  const [state, setState] = useState([]);

  const fetchAxios = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setState(res.data);
  };

  useEffect(() => {
    fetchAxios();
  }, []);
  return (
    <div>
      {state.map((item) => {
        return <h3>{item.title}</h3>;
      })}
    </div>
  );
};

export default FetchAxios;
