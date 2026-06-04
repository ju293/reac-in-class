export default function Input({
    label,
    htmlFor,
    type = "text",
    variant="primary",
    size="sm",
    ...props
}){
     const variants = {
            //Estos valores debem ser con variables
        primary:`
                        border-black-950
                        bg-background
            `,
        secundary:`
                        border-red-950
                        bg-gray-300
            `,
        tertiary:`
                        border-green-950
            `,
     }

     const sizes = {
        sm:`
                        h-8
            `,
        md:`
                        h-10
            `,
        lg:`
                        h-12
            `,
     }

     
    
    
    return(
        <div className="w-80">

                {/* Label */}
            <label 
                //htmlFor con kebab-case
                htmlFor={htmlFor}
                className={`
                    block
                    text-caption
                    mb-1
                    text-secundary
                    ${
                        size === "sm"
                        ? "-mb-2"
                        : size === "md"
                        ? "mb-0"
                        : "mb-1"
                    }
                `}
                >
                {label}
            </label>

            {/* Contenedor del imput */}
            <div
            className="
                relative
                h-8
                flex
                items-center
                "
            >
                {/* Area interactiva invisible (48px) */}
            <div
                className="
                    absolute 
                    inset-0
                    "
                    onMouseDown={(e) => {
                        e.preventDefault()

                        // Mueve el foco al siguiente nodo hermano en el Dom 
                        //nextSibbling puedes ser texto: si no es el elemento valido, focus().falta
                        e.currentTarget.nextSibling.focus();
                    }}
            
            />
                    {/* Input visual */}
                    <input
                        id={htmlFor}
                        type={type}
                        className={`
                        relative
                        w-full
                        h-3
                        rounded-md
                        border
                        px-4
                        text-body

                        focus:outline-none
                        focus:ring-2
                        focus-:ring-ring
                        focus:ring-brand
                        ${variants[variant]}
                        ${sizes[size]}
                    `}
                    {...props}       
                    />
                    
            </div>
        </div>
    ) 
}