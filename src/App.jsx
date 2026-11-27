import { useState } from "react";
import './App.css';



function App() {

  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState(""); 

  function agregarTarea() {
    if (texto.trim() === "") return;

    const nuevaTarea = { id: Date.now(), texto, hecha : false }
     setTareas([...tareas, nuevaTarea]);
     setTexto("");
  }

 function borrarTarea(id) {
  setTareas(tareas.filter((utarea) => utarea.id !== id ))
 }

 function marcarTarea(id) {
  setTareas(tareas.map((t) => t.id === id ? { ...t, hecha: !t.hecha } : t ))

 }
  return(  
   <div className="app">
    <h1>Mis tareas</h1>
    <div className="formulario">
        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button onClick={agregarTarea}>Agregar</button>
      </div>



      <ul>
         {tareas.map((unatarea)=> (
          <li key={unatarea.id}>
            <span
             className={unatarea.hecha ? "hecha" : ""}
             onClick={() => marcarTarea(unatarea.id)}
              >{unatarea.texto} </span>
         <button onClick={() => borrarTarea(unatarea.id)}>Borrar</button>
          </li>
         ) )}
      </ul>
   </div>
  );
}
export default App;