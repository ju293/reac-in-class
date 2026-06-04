//Ejemplo de un contador sin usar estados 

export default function DeleteCounter2(){
    
    let count = 0;

    const increment = () => {
        count = count+ 1
        console.log("El nuevo valor es de: ", count)
    }

    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick = {increment} className="border p-6 rounded-lg bg-yellow-500">incrementar</button>
        </div>
    )
}