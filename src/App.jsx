import { useState } from "react";
import './App.css';



function App() {

  const [tarea, setTarea] = useState([]);
  const [texto, setTexto] = useState(""); 

  function agregarTarea() {
    if (texto.trim() === "") return;

    const nuevaTarea = { id: Date.now(), texto, hecha : false }
     setTarea([...tarea, nuevaTarea]);
     setTexto("");
  }
  return(  
   <div className="app">
    <h1>Mis tareas</h1>
    <div className="formulario">
        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button onClick={() => agregarTarea() }>Agregar</button>
      </div>

      <ul>
         {tarea.map((unatarea)=> (
          <li key={unatarea.id}>
            {unatarea.texto}
          </li>
         ) )}
      </ul>
   </div>
  );
}

export default App;