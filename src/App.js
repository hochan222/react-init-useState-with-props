import React, { useState, useEffect } from "react";

import "./styles.css";

const PropsWithsUseEffect = ({ num }) => {
  const [state, setState] = useState(num);

  useEffect(() => {
    setState(num);
  }, [num]);

  return <div>child state (PropsWithsUseEffect): ${state}</div>;
};

const PropsWithUseState = ({ num }) => {
  const [state] = useState(num);

  return <div>child state (PropsWithUseState): ${state}</div>;
};

const App = () => {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => setState(Math.random(10))}>Click Me</button>
      <div>parent state: {state}</div>
      <PropsWithUseState num={state} />
      <PropsWithsUseEffect num={state} />
    </div>
  );
};

export default App;
