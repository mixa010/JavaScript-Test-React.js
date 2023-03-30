import React from "react";
import "./Header.css";

function Header({ onAddClick }) {
  return (
    <>
      <div id="h1">
        <h1>
          <a href="https://oykos.me/about/">
            <img id="logo" src="img/horizontal-logo.png" alt="logo" />
          </a>
          Employee Cards{" "}
          <button id="add-employee-button" onClick={onAddClick}>
            Add Employee
          </button>
        </h1>
      </div>
    </>
  );
}

export default Header;
