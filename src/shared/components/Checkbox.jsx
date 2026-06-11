export default function Checkbox({
    id,                             //identificador unico(necesario para accesibilidad)
    name,                               
    label,
    checked = false,
    onChange,
    disabled = false,
    className ="",
}) {

    return (
        <label
          htmlFor={id}
          className={`
            flex items-center gap-2
            text-sm
            cursor-pointer
            ${disabled ? "ocapacity-50 cursor-not-allowed" : ""}
            ${className}    
            `}
        >
            {/*{Input del checkbox}*/}

        <input
            id={id}
            name={name}
            type="checkbox"
            disabled={disabled}
            onChange={onChange}
            className="w-5 h-5"
        />

        {/**texto del checkbox*/}
        <span>{label}</span>
      </label>
    );
}

