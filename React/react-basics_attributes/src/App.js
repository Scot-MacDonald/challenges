import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article>
      <h2 className="article__title">h2</h2>
      <label id="theLabel" htmlFor="theLabel">
        Label
      </label>
      <input id="theLabel" htmlFor="theLabel" />
      <a className="article__link" href="https://boomkat.com">
        Boomkat
      </a>
    </article>
  );
}
