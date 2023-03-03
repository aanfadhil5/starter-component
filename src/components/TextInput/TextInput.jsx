const TextInput = (props) => {
  const {
    type,
    name,
    id,
    placeholder,
    onChange,
    disabled,
    value,
    size,
    label,
    required,
    altLabel,
    error,
  } = props;

  return (
    <div className="py-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-gray-700 text-sm font-medium mb-2 uppercase"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        size={size}
        className={`border border-gray-300 rounded-lg p-2 w-full focus:outline-blue-300 hover:border-[#0073aa] ${
          error ? "border-red-400" : ""
        }`}
        required={required}
      />
      {error && (
        <p
          className={`text-xs italic ${
            error ? "text-red-400" : "text-gray-600"
          }`}
        >
          {error}
        </p>
      )}
      {altLabel && <p className="text-xs italic text-gray-600">{altLabel}</p>}
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
  value: "",
};

export { TextInput };
