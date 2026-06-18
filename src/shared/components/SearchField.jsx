import { forwardRef } from "react";
import { Search, LoaderCircle, X } from "lucide-react";
import clsx from "clsx";

const baseStyles = 
  "search flex items-center rounded-xl px-3 transition-all";

const sizeStyles = {
  sm: "h-9 text-sm",
  md: "h-11 text-base",
  lg: "h-13 text-lg",
};

const variantStyles = {
  // filled: campo con fondo relleno, borde mínimo o sutil(material "filled textfield")
  filled: 
    "bg-neutral-100 border-blue-500 hover:border-blue-700 focus-within:bg-white",
  // outlined: campo con fondo transparente y borde visible siempre 
  outlined: "bg-transparent border-green-500 hover:border-green-600",
};

const SearchField = forwardRef(
  (
    {
      value = "",
      placeholder = "Buscar...",
      onChange = () => {},
      onSubmit,
      onClear = () => {},
      size = "md",
      variant = "filled",
      fullWidth = false,
      disabled = false,
      loading = false,
      error = false,
      name = "search",
      ariaLabel = "Campo de búsqueda",
      autoComplete = "off",
      icon,
      className,
    },
    ref
  ) => {
    const SearchIcon = icon || Search;

    const handleClear = () => {
        onChange("");
        onClear();
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (disabled || loading) return;
      
      onSubmit?.(value);
    };

    return (
      <form 
        onSubmit={handleSubmit}
          className={clsx(
            baseStyles,
            sizeStyles[size],
            variantStyles[variant],
            fullWidth && "w-full",
            disabled && "opacity-60 pointer-events-none",
            error 
            ? "border-red-500 focus-within:ring-2 focus-within:ring-red-100"
            : "focus-within:ring-2 focus-within:ring-primary",
            className,
          )}
        >
          {loading ? (
            <LoaderCircle className="size-4 shrink-0 animate-spin text-neutral-500" />
          ) : (
            <SearchIcon className="size-4 shrink-0 text-neutral-500" />
          )}

          <input
            ref={ref}
            type="text"
            name={name}
            value={value}
            disabled={disabled || loading}
            placeholder={placeholder}
            aria-label={ariaLabel}
            onChange={(e) => onChange(e.target.value)}
            autoComplete={autoComplete}
            className="search__input flex-1 bg-transparent px-2 outline-none"
          />

          {!!value && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Limpiar búsqueda"
              className="search__clear rounded-full p-1 hover:bg-neutral-200"
            >
              <X className="size-4 text-neutral-500" />
            </button>
          )}
      </form>
    );
  }
);

SearchField.displayName = "SearchField";

export default SearchField;