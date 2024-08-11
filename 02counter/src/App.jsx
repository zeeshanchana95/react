import { useState } from "react";
import "./App.css";

function App() {
  // useState hook is used to change state (change means update the UI when particular variable is changed)
  let [counter, setCounter] = useState(15);

  // let counter = 50;

  const addValue = () => {
    counter = counter + 1;
    // ask new value to put into counter variable
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  // main problem of react is on updating UI becuase it won't allow you to update but rather react decide how to update UI and give you some tools to follow in order to perform updation called hooks. So, UI updation is controlled by React.

  return (
    <>
      <h1>Chaie or react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
