import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function ModalApp({ modalVisible, users, setUsers, toggle }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [select, setSelect] = useState("");
  const saveUser = (e) => {
    e.preventDefault();
    let payload = {
      name,
      phone,
      address,
      select,
    };
    users.push({ ...payload });
    setUsers([...users]);
    toggle();
  };
  return (
    <div>
      <div className="fixed top-0">
        <Modal isOpen={modalVisible} toggle={toggle}>
          <ModalHeader>
            <h2>User'</h2>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={saveUser} id="form">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Phone"
              />
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
              />
              <select onChange={(e) => setSelect(e.target.value)}>
                <option value="uz" hidden>
                  Check
                </option>
                <option value="uz">Uzb</option>
                <option value="en">Eng</option>
                <option value="ru">Rus</option>
              </select>
            </form>
          </ModalBody>
          <ModalFooter>
            <button form="form">Add User</button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
