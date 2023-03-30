import Header from "./Components/Header";
import List from "./Components/List";
import Form from "./Components/Form";
import { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [types, setTypes] = useState([]);


  useEffect(() => {
    Promise.all([
      fetch("http://localhost:8000/employees"),
      fetch("http://localhost:8000/types"),
    ])
      .then(([employeesResponse, typesResponse]) =>
        Promise.all([employeesResponse.json(), typesResponse.json()])
      )
      .then(([employees, types]) => {
        setEmployees(employees);
        setTypes(types);
      })
      .catch((error) => console.error(error));
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const onCloseClick = () => {
    setShowForm(false);
  };

  const handleAddEmployee = async (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };
  
  

  return (
    <div className="App">
      <Header onAddClick={toggleForm} />
      <List employees={employees} />
      {showForm && (
        <Form onCloseClick={onCloseClick} onSubmit={handleAddEmployee} />
      )}
    </div>
  );
}

export default App;
