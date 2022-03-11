export const RadoiInput = ({ name, id, children }) => {
  return (
    <div className="relative mt-3">
      <input
        className="absolute w-4 h-4 ml-4 -translate-y-1/2 top-1/2 peer checked:text-primary form-radio"
        type="radio"
        name={name}
        id={id}
      />
      <label
        htmlFor={id}
        className="flex px-6 py-3 text-gray-500 bg-white shadow-md cursor-pointer rounded-xl focus:outline-none hover:bg-gray-50 peer-checked:ring-primary peer-checked:ring-2 peer-checked:font-semibold"
      >
        <span className="ml-8">{children}</span>
      </label>
    </div>
  );
};
