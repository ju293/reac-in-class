//Componente para entender el hook useState
import { useState } from "react";

export default function DeleteCounter(){

    //creamos el arreglo 
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1) + 1} className="border p-6 rounded-lg">Incrementar</button>
        </div>
    )
}