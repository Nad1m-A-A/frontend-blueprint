function Input({
  type,
  id,
  name,
  value,
  onChange,
  error,
  placeholder,
  autofocus,
  className,
  options,
}) {
  return (
    <div>
      {options ? (
        <select
          className={`text-center cursor-pointer px-4 py-3 w-full rounded-sm shadow text-primary-100 transition-all duration-200 hover:border-primary-200 focus:border-primary-200 focus:outline-none ${className} ${
            error ? "border-red-500" : ""
          }`}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          autoFocus={autofocus}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={`text-center cursor-pointer px-4 py-3 w-full rounded-sm shadow transition-all duration-200 focus:outline-none outline-none ${className} ${
            error ? "border-red-500" : ""
          }`}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus={autofocus}
        />
      )}
      {error && (
        <p className="text-red-500 text-center text-xs mt-1">{error}</p>
      )}
    </div>
  );
}

export default Input;
