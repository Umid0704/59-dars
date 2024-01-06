import React, { useState } from "react";
import ModalApp from "./ModalApp";

export default function Users() {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div>
      <ModalApp
        modalVisible={modalVisible}
        toggle={() => setModalVisible(false)}
        users={users}
        setUsers={setUsers}
      />
      <button onClick={() => setModalVisible(true)}>Open modal</button>
      <table>
        <thead>
          <tr>
            <th>T/R</th>
            <th>Name</th>
            <th>phone</th>
            <th>Address</th>
            <th>language</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.select}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
