//src/user/schemas//userSchama.js
//Correcion de boleanos 

import { z } from "zod";

export const userSchema = z.object({
    userName: z
      .string()
      .min(3, "El nombre de tener minimo 3 caracteres")
      .max(60,"El nomre es demasiado largo"),

userEmail: z
  .email()
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ingresar un email valido"),

userPhone: z
  .string()
  .regex(/^[0-9]{10}$/, "El telefono debe tener 10 digitos"),

userDocumentType: z.string().min(1, "Debe seleccionar un tipo de documento"),

userDocumentNumber: z
  .string()
  .min(5, "Numero de documento invalido")
  .max(20, "Numero de documeto demasiado largo"),

userPassword: z
  .string()
  .min(8, "Constraseña debe tener minimo 8 caracterers")
  .regex(/[A-Z]/, "Debe de contener al menos una mayuscula")
  .regex(/[a-z]/, "Debe de contener al menos una minuscula")
  .regex(/[0-9]/, "Debe de contener al menos un número")
  .regex(/[^A-Za-z0-9]/, "Debe de contener al menos un caracter especial"),

isStaff: z.boolean(),
isActive: z.boolean(),
isSuperUser: z.boolean(),

});