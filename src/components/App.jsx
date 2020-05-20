import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [addItems, setAddItem] = useState([]);

  const inputHandler = event => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const clickHandler = () => {
    setAddItem(prev => {
      return [...prev, inputValue];
    });
    setInputValue("");
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputHandler} type="text" value={inputValue} />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addItems.map(items => {
            return <li>{items}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
