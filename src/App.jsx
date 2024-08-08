import "./App.css";
import TaskList from "./componentes/TaskList";



function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>MIS TAREAS</h1>
        <TaskList/>

      </div>
    </div>
  );
}

export default App;