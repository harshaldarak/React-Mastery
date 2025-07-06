import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(19);
  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
