import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [idType, setIdType] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        last_name: lastName,
        date_of_birth: dateOfBirth,
        id_type: parseInt(idType),
        picture,
      }),
    });

    const newEmployee = await response.json();

    props.onSubmit(newEmployee);

    setName("");
    setLastName("");
    setDateOfBirth("");
    setIdType("");
    setPicture("");

    props.onCloseClick();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="add-employee-form" style={{ display: "block" }}>
        <button type="button" id="close-button" onClick={props.onCloseClick}>
          X
        </button>{" "}
        <br />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          name="last_name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <label htmlFor="date-of-birth">Date of Birth:</label>
        <input
          type="date"
          id="date-of-birth"
          name="date_of_birth"
          value={dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="id-type">ID Type:</label>
        <select
          id="id-type"
          name="id_type"
          value={idType}
          onChange={(event) => setIdType(event.target.value)}
        >
          <option value="1">Frontend</option>
          <option value="2">Backend</option>
          <option value="3">UI/UX</option>
          <option value="4">HR</option>
          <option value="5">Project Manager</option>
          <option value="6">Accountant</option>
        </select>
        <br />
        <label htmlFor="picture-url">Picture URL:</label>
        <input
          type="text"
          id="picture-url"
          name="picture_url"
          value={picture}
          onChange={(event) => setPicture(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
