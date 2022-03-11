export const SelectInput = ({ id, name, label, options }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-500 dark:text-gray-300"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="block w-full px-4 py-3 mt-2 text-gray-600 bg-white border-none rounded-lg shadow-md dark:bg-slate-300 focus:outline-none focus:ring-primary focus:ring-2 sm:text-sm form-select"
      >
        {options.map((option, i) => (
          <option
            key={option.id}
            value={option.value}
            disabled={i === 0}
            selected={i === 0}
          >
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};
