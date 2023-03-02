import Select from "react-select";

const SelectInput = (props) => {
  const {
    name,
    id,
    placeholder,
    onChange,
    disabled,
    value,
    required,
    options,
    multiple,
    loading,
    label,
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
      <Select
        styles={{
          control: (base) => ({
            ...base,
            border: "1px #D1D5DB solid",
            borderRadius: "8px",
            width: "100%",
            padding: "5px 10px",
            color: "#333",
            ":hover": {
              border: "1px solid #0073aa",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            },
          }),
        }}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        options={options}
        required={required}
        isMulti={multiple}
        isLoading={loading}
      />
    </div>
  );
};

SelectInput.defaultProps = {
  onChange: undefined,
  placeholder: "-- Choose --",
  multiple: false,
};

export { SelectInput };
