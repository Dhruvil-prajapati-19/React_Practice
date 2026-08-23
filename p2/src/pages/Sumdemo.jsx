import { useState } from "react";
import './Sumdemo.css';
function Sumdemo() {
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);
  const [msg, setMsg] = useState("");

  const sum = () => {
    const c = Number(no1) + Number(no2);
    setMsg(c);
  };

  return (
    <div>
      <h2>This is Sumdemo page</h2>

      <input
        type="text"
        value={no1}
        onChange={(e) => setNo1(e.target.value)}
      />

      <input
        type="text"
        value={no2}
        onChange={(e) => setNo2(e.target.value)}
      />

      <button onClick={sum}>Add</button>

      <h3>Sum is: {msg}</h3>
    </div>
  );
}

export default Sumdemo;