import Tareas from "./Tareas"

const ListaTareas = ({tareas, setTarea, eliminarTarea}) => {

    // practicando useEffect
    // useEffect( () => {
    //     if(tareas.length > 0){
    //         console.log('aparecio una tarea')
    //     }
    // }, [tareas])

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-96 md:overflow-y-auto">

            {tareas && tareas.length ? (
                <>
                    <h2 className="font-black text-3xl text-center mb-7">Lista de Tareas</h2>
                    {tareas.map( (tarea) => {
                    return (
                    <Tareas key={tarea.id} tarea={tarea} setTarea={setTarea} eliminarTarea={eliminarTarea} />
                    )
                    })}
                </>
            ) : (
                <h2 className="font-black text-3xl text-center mb-7">No tengo Tareas Pendientes</h2>
            )}

        </div>
    )
}

export default ListaTareas