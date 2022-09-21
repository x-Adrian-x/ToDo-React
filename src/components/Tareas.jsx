const Tareas = ({ tarea, setTarea, eliminarTarea }) => {

  const { titulo, fecha, id } = tarea; // desestructuracion

  const handleEliminar = () => {
    const respuesta = confirm('¿desea eliminar esta tarea?')
    if (respuesta){
      eliminarTarea(id);
    }
  }

    return (
      <div className="bg-yellow-200 shadow-lg rounded-lg py-5 px-5 mb-5">
        <p className="font-bold mb-1 text-gray-700 uppercase">
          Titulo: <span className="font-normal normal-case">{titulo}</span>
        </p>
        <p className="font-bold mb-1 text-gray-700 uppercase">
          Fecha: <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-1 text-gray-700 uppercase">
          Descripción:{" "}
          <span className="font-normal normal-case">{tarea.descripcion}</span>
        </p>
        <div className="flex justify-between">
          <button
            className="bg-green-600 hover:bg-green-700 mt-4 py-2 px-6 rounded-full text-white font-bold"
            type="button"
            onClick={ () => setTarea(tarea) }
          >
            Actualizar
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 mt-4 py-2 px-6 rounded-full text-white font-bold"
            type="button"
            onClick={ handleEliminar }
          >
            Eliminar
          </button>
        </div>
      </div>
    );


};

export default Tareas;
