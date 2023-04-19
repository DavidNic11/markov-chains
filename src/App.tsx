import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import ryan from "./services/data/ryan";

import model from "./services/generated-models/000-order3.json";

import "./App.css";
import { createChain, sampleModel } from "./services/markov-chain";

const words = [
  "I",
  "have",
  "a",
  "dog",
  "named",
  "koda",
  "who",
  "is",
  "a",
  "bit",
  "of",
  "an",
  "ass",
].join(" ");

// split again on period space

const data = ryan;

const chain = createChain([words], 2);
console.log({ chain });
console.log(sampleModel(chain));

// console.log(sampleModel(model));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {[1, 2, 3].map((order) => {
        return (
          <div key={order} className="card">
            <p>order: {order}</p>
          </div>
        );
      })}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
