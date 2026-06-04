//EffectDdemo.jsx
//Effecto con Array vacio, osea  sin dependecias
//Este efecto s ejecuta una sola vez y esto ocurre cuando el componente se monta por primera vez

import { useEffect, useState } from "react"

export default function EffectDdemo(){
    const [message, setMessage] = useState("Cargando...")
    
    useEffect(() => {

        setTimeout(() => {
            setMessage("componente cargado")
        }, 2000);

    },[]);

    return <h1>{message}</h1>
}
