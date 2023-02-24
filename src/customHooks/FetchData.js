import React, { useEffect, useState } from "react";

const UseFetchData = (url) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(url).then((res) => res.json().then((data) => setState(data)));
  }, []);
  return [state];
};

export default UseFetchData;
