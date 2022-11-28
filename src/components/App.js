import '../styles/App.scss';
import contacts from '../data/contacts.json';
import {useState} from 'react';

function App() {
  
  // VARIABLES ESTADO
  const [data, setData] = useState(contacts.results);
  
  // FUNCIONES HANDLER

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
        {/* <!-- Fila de cabecera --> */}
        <thead><tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
        </tr></thead>
        {/* <!-- Fin fila de cabecera --> */}

        <tbody>{htmlData}</tbody>

      </table>
    </div>
  );
}

export default App;
