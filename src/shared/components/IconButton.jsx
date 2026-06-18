///src/shared/components/IconButton.jsx
import React from "react";
import clsx from "clsx";

/**
 * IconButton
 * - Area tactil (hit area):tamaño del boton
 * -Area visible: tamaño del icono (controlado por wrapper interno)
Reac.forwardenRef"puente para que el padre controle el DOM interno".
*/

export const IconButton = React.forwardRef(function IconButton(
    {
        children,
        onClick,
        disabled = false,
        className = "",
        variant = "default",

        //Tamaños
        hitSize = 48, //px (area tactil)
        iconSize = 24, //px (icono visible
        
        //accesibilidad
        ariaLabel,

        //estados
        isActive = false,

        ...props
    },
    ref
) {
    const baseStyles =
    "flex items-center justify-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:pointer-events-none";
   
    const variants = {
    default:
      "bg-neutral-700 hover:bg-neutral-200 text-neutral-800 focus-visible:ring-neutral-500",
    ghost: `
      text-neutral-600
      hover:bg-neutral-100
      focus-visible:ring-neutral-300
    `,
    primary: `
      text-white bg-blue-600
      hover:bg-blue-700
      focus-visible:ring-blue-500
    `,
  };

  return (
    <button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className, {
        "bg-neutral-300": isActive,
      })}
      style={{
        width: `${hitSize}px`,
        height: `${hitSize}px`,
      }}
      {...props}
    >
      <span
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
        }}
        className="flex items-center justify-center"
      >
        {children}
      </span>
    </button>
  );
});
