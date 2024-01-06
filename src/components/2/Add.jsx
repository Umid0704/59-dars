import React, { useState } from "react";

export default function Add({ total, setTotal }) {
  const [add, setAdd] = useState("");
  const adduser = () => {
    let payload = { add };
    total.push({ ...payload });
    setTotal([...total]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setAdd(e.target.value)}
      />
      <button onClick={adduser}>add</button>
    </div>
  );
}
