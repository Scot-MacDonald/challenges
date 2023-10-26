import "./styles.css";
import { useState } from "react";

// export default function App() {
//   const isActive = false;

//   function handleClick() {
//     isActive = !isActive;
//     // Check that the value changes correctly.
//     console.log(isActive);
//   }

export default function App() {
  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(!active);

    console.log(active);
  }

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {active ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}
