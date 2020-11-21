import React, { useState } from "react";

function States() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  function handleIncrememnt() {
    setIncrement(increment + 1);
  }
  function handleDecrememnt() {
    setDecrement(decrement + 1);
  }
  return (
    <div>
      <button onClick={handleIncrememnt}>Like</button>
      <h2>{increment}</h2>
      <button onClick={handleDecrememnt}>Disike</button>
      <h2>{decrement}</h2>
    </div>
  );
}
export default States;
