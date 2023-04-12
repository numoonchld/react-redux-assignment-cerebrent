import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./../actions";
import { v4 } from "uuid";

export default function Form() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { addEntry } = bindActionCreators(actions, dispatch);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!fName || !lName || !email) {
      alert("input not valid!");
      return;
    }

    addEntry({ id: v4(), fName, lName, email });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="firstName">First Name: </label>
      <input
        id="firstName"
        type="text"
        value={fName}
        onChange={(e) => setFName(e.target.value)}
      />
      <br />
      <label htmlFor="lasttName">Last Name: </label>
      <input
        id="lasttName"
        type="text"
        value={lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
