const Radio = (props) => {
  const {
    label,
    name,
    id,
    value,
    defaultChecked,
    onChange,
    disabled,
    options,
    required,
  } = props;

  return (
    <div className="py-2">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-medium mb-2 uppercase"
      >
        {label}
      </label>
      <div className="flex items-center gap-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              id={option.value}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              disabled={disabled}
              className="h-4 w-4 border-gray-300 focus:ring-blue-300 cursor-pointer"
              required={required}
            />
            <label
              htmlFor={option.value}
              className="text-sm font-medium text-gray-900 ml-1 block capitalize"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const ColoredRadio = (props) => {
  const {
    label,
    name,
    id,
    value,
    defaultChecked,
    onChange,
    disabled,
    options,
    required,
  } = props;

  return (
    <div className="py-2">
      <label
        className="block text-gray-700 text-sm font-medium mb-2 uppercase"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="flex rounded border justify-between">
        {options.map((option) => (
          <div className="flex-1 border-r" key={option.value}>
            <input
              type="radio"
              name={name}
              id={option.value}
              value={option.value}
              className="peer hidden"
              onChange={onChange}
              disabled={disabled}
              checked={value === option.value}
              required={required}
            />
            <label
              htmlFor={option.value}
              className="block cursor-pointer select-none rounded p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white capitalize transition-all duration-200 peer-checked:border-blue-500 peer-checked:border-2 peer-checked:border-solid"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

Radio.defaultProps = {
  value: "",
  checked: undefined,
};
ColoredRadio.defaultProps = {
  value: "",
  checked: undefined,
};

export { Radio, ColoredRadio };
