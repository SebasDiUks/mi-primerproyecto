import { useState, useEffect } from "react";

export default function Bienvenido(props){
    const[counter,setCounter]=useState(0);
    const[semaforo,setSemaforo]=useState(false);
    const{message, nombre}=props;

    useEffect(()=>{
        console.log(semaforo);
    }, [semaforo]);

    const contar=()=>{
        setCounter(counter+1);
        setSemaforo(!semaforo);
    }

    return(
        <div>
            <h1>Hola, {nombre}</h1>
            <p>{message}</p>
            <h4>Contador de React con Hooks</h4>
            <h4>El número del conador es {counter}</h4>
            <p>El semaforo está en color {semaforo ? "red":"green"}</p>
            <button type="submit" onClick={contar}>Sumar Contador</button>
        </div>
    );
}


//<button type="submit" onClick={()=>setCounter(counter+1)}>Sumar Contador</button>