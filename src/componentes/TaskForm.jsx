import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4} from 'uuid';

const TaskForm = (props) => {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    //Recibe el evento cuando cambia el texto en el input
    setInput(e.target.value);//Permite extraer el valor del campo de texto que ingreso el usuario

  }

  const manejarEnvio = e => {
    //Evento de submit, de envío de formulario
    e.preventDefault();
    console.log("Enviando formulario...")

    const tareaNueva = {
      //Paquete uuid para generar identificadores unicos
      id: uuidv4(),
      texto: input,
      completada:false
    }
    props.onSubmit(tareaNueva);
  }

  return (
    <form
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  )
}

export default TaskForm;
