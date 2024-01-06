import React, { useState } from "react";
import Add from "./Add";
import List from "./List";

export default function Total() {
  const [total, setTotal] = useState([]);
  return (
    <div>
      <div>
        <h1>Total:{total.length}</h1>
      </div>
      <div>
        <Add total={total} setTotal={setTotal} />
      </div>
      <div>
        <h1>list</h1>
        <List total={total} setTotal={setTotal} />
      </div>
    </div>
  );
}
