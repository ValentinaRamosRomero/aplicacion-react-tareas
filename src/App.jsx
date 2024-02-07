import "./App.css";
import freecodecamplogo from "../public/freecodecamp-logo.png";
import ListaDeTareas from "./componentes/ListaDeTareas";
//import TareaFormulario from "./componentes/TareaFormulario";


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img src={freecodecamplogo} className="freecodecamp-logo" />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
       <ListaDeTareas/>
      
      </div>
    </div>
  );
}

export default App;