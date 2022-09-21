import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});


  useEffect(() => {
    const obtenerTareasLocalStorage = () => {
      const tareasLocalStorage =
        JSON.parse(localStorage.getItem("tareas")) ?? []; // sino hay nada envieme un arreglo vacio
      setTareas(tareasLocalStorage);
    };
    obtenerTareasLocalStorage();
  }, []);

  useEffect(() => {
    if(tareas.length > 0){
      localStorage.setItem("tareas", JSON.stringify(tareas)); // esto se hace porque el local storage no almacena objetos, solo strings
    }
  }, [tareas]); // en los corchetes van las dependencias



  const eliminarTarea = (id) => {
    const actualizarTarea = tareas.filter((tarea) => tarea.id !== id); // trae todas las tareas que no tengan esa id
    setTareas(actualizarTarea);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-10 md:flex justify-center">
        <Form
          tareas={tareas}
          setTareas={setTareas}
          tarea={tarea}
          setTarea={setTarea}
        />
        <ListaTareas
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
          tarea={tarea}
        />
      </div>
    </div>
  );
}

export default App;
