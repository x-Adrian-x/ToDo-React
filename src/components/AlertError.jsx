
function AlertError({children}) {  /* children es una palabra reservada de react que trae todos los props del componente */
  return (
    <div className="bg-red-600 font-bold uppercase text-center text-white p-3 mb-5 rounded-md">
        {children}
    </div>
  )
}

export default AlertError