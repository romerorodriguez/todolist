"use client"
//componente funcional 

//funcion flecha 
//funcion anonima
//funcion de expresion
//funcion de asignacion 
//IIEF (Inmediately Invoked Function Expression)
//Funcion de expresion invocada inmediantamente 

import { useState } from "react"
import styles from "./page.module.css"
//funcion de expresion
export default function Page() { //retornar un componente y se exporoto de modo default 

  const [tareas, setTareas] = useState([]); 
  const[filtroTexto, setFiltroTexto] = useState("");
  const[filtroPrioridad, setFiltroPrioridad] = useState("");

  const [nuevaTarea, setNuevaTarea] = useState({
    nombre: "",
    fecha: "",
    prioridad: ""
  })
  console.log(nuevaTarea)

  function handleChange(event) {
    setNuevaTarea({
      ...nuevaTarea,
      [event.target.name]: event.target.value
    })
  }

  function handleChangeSearchTexto(event) {
    setFiltroTexto(event.target.value)
  }

  function handleChangeSearchPrioridad(event) {
    setFiltroPrioridad(event.target.value)
  }

  function agregarTarea() {
    const newListaTareas = tareas.slice();
    const newTarea = {
      nombre: nuevaTarea.nombre,
      fecha: nuevaTarea.fecha,
      prioridad: nuevaTarea.prioridad,
      creadoEl: new Date().toISOString()
    }
    newListaTareas.push(newTarea);
    setTareas(newListaTareas);
    setNuevaTarea({
      nombre: "",
      fecha: "",
      prioridad: ""
    })
  }

  return (
    <div className={styles.container}> 
      <div className={styles.box}>
        <h1>To-Do List</h1>
        <input value={nuevaTarea.nombre} onChange={handleChange} type="text" placeholder="Agregar tarea..." name="nombre"></input>
        <input type="date" name="fecha" onChange={handleChange} value={nuevaTarea.fecha}></input>
        <select name="prioridad" onChange={handleChange} value={nuevaTarea.prioridad}>
          <option>Prioridad</option>
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </select>
        <button onClick={agregarTarea}>Agregar</button>

        <div 
          style={{
            marginTop: "20px",
          }}>
          <h4>Filtros</h4>
          <input type="text" placeholder="Buscar tarea..." className={styles.busqueda} onChange={handleChangeSearchTexto} value={filtroTexto}/>
        </div>

        <div>
          <p>Ordenar por prioridad:</p>
          <select className={styles.busqueda} onChange={handleChangeSearchPrioridad} value={filtroPrioridad}>
            <option>Prioridad</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
        </div>

        <div 
          style={{
            marginTop: "20px"
          }}>
          <ul>
            {
              tareas
              .filter((tarea) => 
                tarea.nombre.toLowerCase().includes(filtroTexto.toLowerCase()
            )) //callback
              .filter((tarea) => {
                if (filtroPrioridad === "") {
                  return true 
                }
                return tarea.prioridad === filtroPrioridad;  //callback
              }) //callback
              .map(
                (tarea) => {
                  return (
                    <li className={styles.tarea}>
                      <h6>{tarea.nombre}</h6>
                      <p>{tarea.fecha}</p>
                      <p>{tarea.prioridad}</p>
                    </li>  //key es para identificar un elemento en la lista, debe ser unico y no cambiar.
                  )
                } //callback
              )
            }
          </ul>
        </div>  
      </div>
    </div>  
  )
}

//<div> etiquetas de html
//etiqueta de apertura y una etiqueta de cierre
//<div>: etiqueta de apertur. </div>: etiqueta de cierre

//CSS:
//estilos en clase 
//estilos en id
//estilos por etiquetas
//estilos en linea 

//orden de precedencia de los estilos: 
//1. estilos en linea 
//2. estilos por id
//3. estilos por etiqueta
//4. estilos por clase 