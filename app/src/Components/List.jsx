import React from "react";
import Card, { removeCard } from "./Card";
import "./List.css";

function List({ employees, types }) {
  return (
    <div id="list">
      <div id="list2">
        <ul id="employee-list">
          {employees.map((employee) => (
            <Card
              key={employee.id}
              employee={employee}
              types={types}
              onRemove={removeCard}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
