import React, { useState } from 'react'
import '../hojas-de-estilo/ListaDeTareas.css';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';


//Componente que genera el formulario y las tareas
const TaskList = () => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log(tarea)
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas)
        }
    };

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas)
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea =>{
            if(tarea.id === id){
                tarea.completada = ! tarea.completada 
            }
            return tarea;
        })
        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TaskForm onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <TaskItem
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }

            </div>
        </>
    )
}

export default TaskList;