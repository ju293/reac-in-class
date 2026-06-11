//userRegisterfor para registrar el ususario

import { useState, useEffect } from "react";
import { Input, Select, Checkbox, Button  } from "@/shared";
import {getDocumentTypes} from "../../services/selectService";

export default function UserRegisterForm (){
    // Estado del formulario
 const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userDocumentType: "",
    userDocumentNumber: "",
    userPassword: "",

    // Flags booleans
    inStaff: false,
    isActive: false,


 })
//==============================
//-h-a-n-d-l-e--g-e-n-e-r-i-c-o-
//==============================

/**funcion que se ejecuta cada vez que cambia el valor de un input del formulario */
const handleChange = (e) => {
    //Se obtiene el nombre
    const {name, value, type, checked } = e.target;

    setFormData((prev) => ({
        //Se copian todos lo valores anteriores del estado
        ...prev,

        //Se actualiza unicamente lo que cambio
        [name]:type === "checkbox" ? checked : value,
    }));
};

//-h-a-n-d-l-e--s-u-b-m-i-t-


const handleSumbit = async (e) => {

    e.preventDefault();

    //validamos los datos del formulario contra el esquema zod
    //safeParse No lanza exepción, retorna un objeto controlado
    const result = userSchema.safeParse(formData);

    //verificar en consola sie l esquema esta funcionando correctamente 
    //console.log(result);

    //si la validacion falta
    if (!result.success) {
        const fieldErrors = {};
    
        result.error.issues.forEach((issue) => {
            fieldErrors[issue.path[0]] = issue.message;
        });
    
        //Actualizmos el estado del errores para mostrarlos en la UI
        setErrors({});
        
        //cortamos la ejecucion : no se envia nada al backend


        return;
    }


    setErrors({});
}




     //Estado para los tipos de documento
        const[documentTypes, setDocumentTypes] = useState([])
        
        // Uso del estado useEffect
        useEffect(() => {
            getDocumentTypes().then(setDocumentTypes);
        },[])

    return (
        <div>
            <Input
                label="Nombre"
                type="text"
                placeholder="Ingrese su nombre"
                htmlFor="user-name"
            />
            <Input
                label="correo"
                type="email"
                placeholder="Ingrese su correo electronico"
                htmlFor="user-email"
            />
            <Input
                label="Telefono"
                type="tel"
                placeholder="Ingrese su telefono"
                htmlFor="user-phone"
            />
            <Input
                label="Tipo de documento"
                type="text"
                placeholder="Ingrese su tipo de documento"
                htmlFor="user-document-number"
            />
            <Input
                label="Documento"
                type="userDocumentType"
                placeholder="Ingrese su numero de documento"
                htmlFor="user-document-number"
            />
            <Input
                label="Contraseña"
                type="password"
                placeholder="Ingrese su contraseña"
                htmlFor="user-password"
            />

            {/**chackbox */}
{/* 
            <Checkbox
            id="isSuperUser"
            name="isSuperUser"
            label="Es super usuario"
            checked={FormData.isSuperUser}
            onChange={handleSummit}
            />
            <Checkbox
            id="isStaff"
            name="isStaff"
            label="Es super"
            checked={FormData.isSuperUser}
            onChange={handleSummit}
            />
            <Checkbox
            id="isSuperUser"
            name="isSuperUser"
            label="Es super usuario"
            checked={FormData.isSuperUser}
            onChange={handleSummit} */}
            {/* /> */}



             {/* Actions */}
            <div className="flex gap-6 items-center">
                <Button
                    variant="secondary"
                    size="sm"
                    type="button"
                    onClick={() => console.log("Se oprimio cancelar")}
                >
                    Cancelar
                </Button>
                   <Button
                        variant="primary"
                        size="md"
                        type="submit"
                        onClick={() => console.log("Se orpmio el submit")}
                    >
                    Guardar
                </Button>
                </div>
        </div>    
    )
}
