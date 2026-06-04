//Componente CounterEffect
/** */




import { useEffect, useState } from "react";

export default function CounterEffect() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("el contador no ha cambiado");

    useEffect(() => {
        setMessage(`El contador cambió a: ${count}`);
    }, [count]);

    return (
        <div>
            <h2>{count}</h2> 
            <p>{message}</p> 

            {/** cada vez que se oprime el boton se incrementa el contador*/}
            <button onClick={() => setCount(count + 1)} className="border p-6 bg-green-300">
                incrementar
            </button>
        </div>
    )
}
