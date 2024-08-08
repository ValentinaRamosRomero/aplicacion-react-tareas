import "./App.css";

import ListaDeTareas from "./componentes/ListaDeTareas";
//import TareaFormulario from "./componentes/TareaFormulario";


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>MIS TAREAS</h1>
        <ListaDeTareas />

      </div>
    </div>
  );
}

export default App;