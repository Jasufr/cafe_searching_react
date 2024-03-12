import './index.css';
import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

// function Hello({name, age}) {
//   return (
//     <div className="container">
//       <h1>Hello {name}, {age} yo</h1>
//     </div>
//   );
// }

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
