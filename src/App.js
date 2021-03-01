import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");
  const randomColorHEX = (Math.random() * 0xfffff * 1000000).toString(16);
  const finalColorHEX = "#" + randomColorHEX.slice(0, 6);

  function handleClick(event) {
    setColor(finalColorHEX);
  }

  return (
    <div className="App">
      <button
        style={{ backgroundColor: color }}
        onClick={handleClick}
        className="btn-random"
      >
        <h2>Clique para mudar cor de fundo!</h2>
        <div className="bg-random"></div>
      </button>
    </div>
  );
}

export default App;
