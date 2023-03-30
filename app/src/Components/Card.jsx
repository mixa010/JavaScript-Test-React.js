import "./Card.css";

function Card({ employee, types }) {
  let idType = "";
  if (types && types.length > 0) {
    idType = types.find((type) => type.id === employee.id_type)?.name || "";
  }

  return (
    <div className="card" data-id={employee.id}>
      <img
        className="card-img-top"
        src={employee.picture}
        alt={`${employee.name} ${employee.last_name}`}
      />
      <div className="card-body">
        <h5 className="card-title">
          {employee.name} {employee.last_name}
        </h5>
        <p className="card-text">Date of Birth: {employee.date_of_birth}</p>
        <p className="card-text">Profession: {idType}</p>
        <p id="id-text" className="card-text">
          ID: {employee.id}{" "}
          <button
            className="remove-button"
            onClick={(event) => removeCard(event.target)}
          >
            X
          </button>
        </p>
      </div>
    </div>
  );
}

function removeCard(button) {
  const card = button.closest(".card");
  const employeeId = card.dataset.id;

  fetch(`http://localhost:8000/employees/${employeeId}`, { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        card.classList.add("fade-out");

        setTimeout(() => {
          card.remove();
        }, 300);
      } else {
        console.error("Failed to remove employee from server.");
      }
    })
    .catch((error) => {
      console.error("Failed to remove employee from server.", error);
    });
}

export default Card;
export { removeCard };
