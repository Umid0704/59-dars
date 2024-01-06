import React from "react";

export default function List({ total }) {
  console.log(total);
  return (
    <div>
      <h1>List</h1>
      <div>
        {total.map((item, index) => {
          return (
            <div>
              <p>{item.add}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
