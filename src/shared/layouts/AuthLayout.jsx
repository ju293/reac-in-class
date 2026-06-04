import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import { Input, Button } from "@/shared"
// import DeleteCounter from "../components/DeleteCounter";
import DeleteCounter2 from "../components/DeleteCounter2";

export default function AuthLayout() {
  return (
    <>
      <div 
        className="min-h-screen w-full"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="mx-auto">
          <Input
            label="Nombre"
            type="text"
            placeholder="Escribe tu nombre"
            htmlFor="user-name"
            variant = "secundary"
            size = "md"
            />
            <Input
            label="Correo"
            type="email"
            placeholder="Escribe tu correo"
            htmlFor="user-email"
            />
            <Input
            label="Telefono"
            type="tel"
            placeholder="Escribe tu numero de telefono"
            htmlFor="user-phone"
            />
            <Input
            label="Borrar tipo de documento"
            type="text"
            placeholder="Escribe tu nombre"
            htmlFor="name"
            />
            <Input
            label="Documento"
            type="text"
            placeholder="Escribe tu numero de document"
            htmlFor="user-document-number"
            />
                {/* Actions */}
            
            <div className="flex gap-6 items-center">
              <Button
                variant="secundary"
                size="sm"
                type="submit"
                OnClick={() => console.log("se oprimio el submit")}

              >
                Cancelar
              </Button> 
              <Button
                variant="primary"
                size="md"
                type="submit"
                OnClick={() => console.log("se oprimio el submit")}

              >
                Guardar
              </Button>
            </div>{/* Actions */}

            {/* Implemetacion del estado useState */}
            <div className="mt-10">
            <DeleteCounter2 />
          <h1>Hola que tal</h1>
          </div>
        <Outlet />
      </main>
    </div>
  </>  
  );
}
