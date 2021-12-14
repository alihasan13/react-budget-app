import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="count">
      <button className="count count-bg" onClick={increment}>Count : {counter}</button>
    </div>
  );
};

export default Counter;