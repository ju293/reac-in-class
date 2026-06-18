//userRegisterfor para registrar el ususario
import { useState, useEffect } from  "react"
import { Input, Select, Checkbox, Button, IconButton } from "@/shared" // Agregado IconButton
import { getDocumentTypes } from "@/services/selectService";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../components/schemas/userSchema";
import { ArrowLeft } from "lucide-react"; // Agregado el icono de la flecha


export default function UserRegisterForm (){
//
    

//navegacion
     const navigate = useNavigate();

//Estado del error
     const [ errors, setErrors] = useState({})

// Estado del formulario
     const [FormData, setFormData] = useState({
        userName:"",
        userEmail:"",
        userPhone:"",
        userDocumentTypes:"",
        userDocumentNumber:"",
        userPassword:"",
        // userImage:[],

        isStaff: false,
        isActive: true,
        isSuperUser: false,

        
        
    });
    const[documentTypes, setDocumentTypes] = useState ([])
       // El uso del estado  useEffect
       useEffect(() =>{
           getDocumentTypes().then(setDocumentTypes);
       },[])


    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        setFormData ((prev) => ({
            ...prev,

            [name]: type === "checkbox" ? checked : value
        }));
    };




    const handleSubmit = async (e) => {
        // Evita que el formulario recargue la pagina
        e.preventDefault();

        // ¡CORREGIDO!: result.success con doble s
        const result = userSchema.safeParse(FormData);

        if (!result.success){
            const fieldErrors = {};

            result.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            })

            setErrors(fieldErrors);
            // cortamos la ejecución no se envia nada al bacekend
            return;
        }
        // Si la validación pasa, limpiamos errores previos
        setErrors({});

        // Activamos estado de envio (útil para deshabilitar el botón)
        // setIsSubmitting(true);

        try {
            // Llamamos al servicio frontend que consume la API
            // Result.data contiene los datos validados por zod
            // const response = await createUser(result.data);

            alert ("Usuario creado exitosamente");

            // navegamos a la vista anterior
            // navigate(-1) equivale a volver atras

            // navigate(-1);
        }catch (error){
            // Capturamos errores de red o  errores laanzados por el service
            console.error("error", error.message);

            // Mostramos el mensaje de error al usuario
            alert(error.message);
        }finally {
            // pase lo que pase, Desactivamos el estado de envio
            // setIsSubmitting(false);
        }

    };

    
    // ===============================
    //    Handle nameChange
    // ===============================

    // const handleNameChange = (e) => {
    //     const {value} = e.target.value.trim();

    //     if (value === ""){
    //         console.log("El nombre no puede estar vacio");
    //     }
    // };
    return(
        <div className="grid items-center justify-center">
          
          {/* Agregado el div con el IconButton y tu título juntos */}
          <div className="flex items-center gap-4 my-12 mx-auto">
            <IconButton 
              variant="ghost" 
              ariaLabel="Volver atrás"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft />
            </IconButton>
            <h1 className="text-title font font-font-heading font-bold">Registro de usuarios</h1>  
          </div>

          <form
           action=""
           onSubmit={handleSubmit}
           >
        
            <Input 
             label="nombre"
             name="userName"
             type="text"
             value={FormData.userName}
             placeholder="Escribe tu nombre"
             htmlFor="user-name"
             onChange={handleChange}
             error={errors.userName}
            />
            <Input 
             label="correo"
             name="userEmail"
             type="email"
             value={FormData.userEmail}
             placeholder="Escribe tu correo"
             htmlFor="user-email"
             onChange={handleChange}
             error={errors.userEmail}
            />
            <Input 
             label="Telefono"
             name="userPhone"
             type="tel"
             value={FormData.userPhone}
             placeholder="Escribe tu número de teléfono"
             htmlFor="user-phone"
             onChange={handleChange}
             error={errors.userPhone}
            />
            <Select
              label="tipos de documentos"
              name="userDocumentTypes"
              htmlFor="userDocumentTypes"
              options={documentTypes}
              onChange={handleChange}
              error={errors.userDocumentTypes}
            />
            <Input 
             label="Documento"
             name="userDocumentNumber"
             type="text"
             value={FormData.userDocumentNumber}
             placeholder="Escribe tu número de documento"
             htmlFor="user-document-number"
             onChange={handleChange}
             error={errors.userDocumentNumber}
            />
            <Input 
             label="Contraseña"
             name="userPassword"
             type="password"
             value={FormData.userPassword}
             placeholder="Escribe tu contraseña"
             htmlFor="user-password"
             onChange={handleChange}
             error={errors.userPassword}
            />

            {/**Checkbox */}
            <div className="grid gap-4 my-8">

            <Checkbox
                id="isSuperUser"
                name="isSuperUser"
                label="Es super usuario"
                checked={FormData.isSuperUser}
                onChange={handleChange}
            />
            <Checkbox
                id="isStaff"
                name="isStaff"
                label="Es staff"
                checked={FormData.isStaff}
                onChange={handleChange}
            />
            <Checkbox
                id="isActive"
                name="isActive"
                label="Esta activo"
                checked={FormData.isActive}
                onChange={handleChange}
            />

            </div>


                {/*Actions*/}

            <div className="flex gap-6 items-center">
                
                <Button
                  variant="secondary"
                  size="sm"
                  type="submit"
                  onClick={() => console.log("se oprimio el submit")}
                >  
                    Cancelar
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  onClick={() => console.log("se oprimio el submit")}
                >  
                     Guardar
                </Button>
            </div>
        </form>
        
        </div>
    );
}