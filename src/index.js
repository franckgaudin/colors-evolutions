import React from "react";
import ReactDOM from "react-dom";
import { colors } from "./data";

import "./styles.scss";

const tableRow = colors.map((color, index) => (
  <tr className="table__row" key={index}>
    <td className="table__cell">
      {color.origin.name}
      <div className="render">
        {color.origin.value}
        <span
          className="preview"
          style={{ backgroundColor: `${color.origin.value}` }}
        />
      </div>
    </td>
    <td className="table__cell">
      {color.evolution.name}
      <div className="render">
        {color.evolution.value}
        <span
          className="preview"
          style={{ backgroundColor: `${color.evolution.value}` }}
        />
      </div>
    </td>
  </tr>
));

function App() {
  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr className="table__head">
            <th className="table__cell"> Old</th>
            <th className="table__cell"> New</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
