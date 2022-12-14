import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";

function App() {
  // VARIABLES ESTADO
  const [data, setData] = useState(contacts.results);
  const [newContact, setNewContact] = useState({
    name: "",
    counselor: "",
    speciality: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  // FUNCIONES HANDLER
  const handleNewContact = (ev) => {
    setNewContact({ ...newContact, [ev.target.id]: ev.target.value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    if (
      newContact.name !== "" &&
      newContact.counselor !== "" &&
      newContact.speciality !== ""
    ) {
      data.push(newContact);
      setData([...data]);
      setNewContact({
        name: "",
        counselor: "",
        speciality: "",
      });
    } else {
      setErrorMsg("*Debes rellenar todos los campos");
    }
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  console.log(data);
  const htmlData = data.map((oneContact) => {
    return (
      <tr key={oneContact.id}>
        <td>{oneContact.name}</td>
        <td>{oneContact.counselor}</td>
        <td>{oneContact.speciality}</td>
      </tr>
    );
  });

  // HTML EN EL RETURN
  return (
    <div className="App">
      <h1 className="title">Adalabers</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>

        <tbody>{htmlData}</tbody>
      </table>

      {/* Formulario new contact */}
      <form>
        <h2>Añadir una adalaber</h2>
        <p>{errorMsg}</p>
        <label htmlFor="name">Nombre</label>
        <input
          className="new-contact__input"
          type="text"
          name="name"
          id="name"
          onInput={handleNewContact}
          value={newContact.name}
        />
        <label htmlFor="counselor">Tutora</label>
        <input
          className="new-contact__input"
          type="text"
          name="counselor"
          id="counselor"
          onInput={handleNewContact}
          value={newContact.counselor}
        />
        <label htmlFor="speciality">Especialidad</label>
        <input
          className="new-contact__input"
          type="text"
          name="speciality"
          id="speciality"
          onInput={handleNewContact}
          value={newContact.speciality}
        />
        <input
          className="new-contact__btn"
          type="submit"
          value="Añadir una nueva Adalaber"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default App;
