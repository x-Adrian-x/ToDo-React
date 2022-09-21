//import React from 'react'

import { useState, useEffect } from "react";
import AlertError from "./AlertError";

const Form = ({ tareas, setTareas, tarea, setTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setFecha(tarea.fecha);
      setDescripcion(tarea.descripcion);
    }//  else {
    //   console.log("no hay tareas ☹");
    // }
  }, [tarea]);


  // validacion formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([titulo, fecha, descripcion].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // Modal de exito!
    const okModal = () => {
      Swal.fire({
        title: 'Éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar 😎'
      });
    };

    // formulario completado
    okModal();

    // limpiar nuestro formulario
    setTitulo("");
    setFecha("");
    setDescripcion("");


    const generarId = () => {
      const id = Math.random().toString(20).substr(2);
      return id;
    };

    const objetoTareas = {
      titulo,
      fecha,
      descripcion
    };

    if (tarea.id) {
      //editando tarea
      objetoTareas.id = tarea.id

      const tareasActualizadas = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? objetoTareas : tareaState
      );
      setTareas(tareasActualizadas)
      setTarea({});
    } else {
      //nueva tarea
      objetoTareas.id = generarId();
      setTareas([...tareas, objetoTareas]);
    }

  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h1 className="font-black text-3xl text-center mb-7">Crear Tareas</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-yellow-200 shadow-lg rounded-lg py-10 px-5 mb-10"
      >
        {error /* si error es verdadero no va a imprimir nada, pero si es falso imprime lo que dice ahi. */ && (
          <AlertError>
            <p>Faltan campos por completar</p>
          </AlertError>
        )}
        <label
          htmlFor="titulo"
          className="block text-gray-700 uppercase font-bold"
        >
          Titulo: {titulo}
        </label>
        <input
          id="titulo"
          type="text"
          placeholder="ingrese titulo"
          className="border-2 w-full p-2 mb-2 rounded-md placeholder-gray-400"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <label
          htmlFor="fecha"
          className="block text-gray-700 uppercase font-bold"
        >
          Fecha
        </label>
        <input
          id="fecha"
          type="date"
          className="border-2 w-full p-2 mb-2 rounded-md"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <label
          htmlFor="descripcion"
          className="block text-gray-700 uppercase font-bold"
        >
          Descripción
        </label>
        <textarea
          name="descripcion"
          id="descripcion"
          cols="60"
          rows="3"
          placeholder="ingrese descripción"
          className="border-2 w-full p-2 mb-2 rounded-md placeholder-gray-400"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        {!tarea.id ? ( // si existe el id de la tarea entonces retorne esto
          <input
            type="submit"
            value="Crear Tarea"
            className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-700 cursor-pointer"
          />
        ) : (
          // sino
          <input
            type="submit"
            value="Actualizar Tarea"
            className="bg-purple-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-purple-700 cursor-pointer"
          />
        )}
      </form>
    </div>
  );
};

export default Form;
