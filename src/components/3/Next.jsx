import React, { useState } from "react";

export default function Next() {
  const [users, setUsers] = useState([
    { id: 1, name: "Umid", check: false },
    { id: 2, name: "Vohidjon", check: false },
]);
const [active, setActive] = useState([
      { id: 3, name: "Zohidjon", check: false }
  ]);
  const handleCheckUser = (id) => {
    users.forEach((item, index) => {
      if (item.id == id) {
        item.check = !item.check;
      }
    });
  };
  const handleCheckActive = (id) => {
    active.forEach((item, index) => {
      if (item.id == id) {
        item.check = !item.check;
      }
    });
  };
  const click = (values) => {
    if (values == "actives") {
      users.forEach((item, index) => {
        console.log(item);
        if (item.check === true) {
          active.push(item);
          users.splice(index, 1);
          setActive([...active]);
        } 
      });
    }else {
        active.forEach((item, index) => {
          console.log(item);
          if (item.check === true) {
            users.push(item);
            active.splice(index, 1);
            setUsers([...users]);
          }
        });
      }
  };

  return (
    <div className="flex border border-black w-[500px] justify-around">
      <div>
        <h1>user</h1>
        {users.map((item, index) => {
          return (
            <div key={index}>
              <p>
                {item.name}{" "}
                <input type="checkbox" onChange={() => handleCheckUser(item.id)} />
              </p>
            </div>
          );
        })}
        <button onClick={() => click("actives")}>active </button>
      </div>
      <div>
        <h1>active</h1>
        {active.map((item, index) => {
          return (
            <div key={index}>
              <p>
                {item.name}{" "}
                <input type="checkbox" onChange={() => handleCheckActive(item.id)} />
              </p>
            </div>
          );
        })}
        <button onClick={()=>click("users")}>user</button>
      </div>
    </div>
  );
}
