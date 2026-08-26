import { useState } from "react";
// import '@picocss/pico/css/pico.min.css';
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  function limitCount() {
    if (count >= 10) {
      document.getElementById("info").innerHTML = "Count cannot exceed 10";
      setCount(0);
      return;
    }

    setCount(count + 1);
  }
 function naglimit() {
  if (count <= 0) {
    document.getElementById("info").innerHTML = "Count cannot be less than 0";
    return;
  }
  setCount(count - 1);
 }
  return (
    <div>
      <h1>This is home page</h1>

      <p id="count">Count: {count}</p>

      <button onClick={limitCount}>
        Add
      </button>
      <button onClick={(naglimit)}>
      sub 
      </button>

      <p id="info"></p>
    </div>
  );
}

export default Home;