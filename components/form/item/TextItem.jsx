/**
 * Text input form item
 */
const TextItem = ({ attributeDescription, defaultValue = '', onChange }) => {
  return (
    <div className="input-type">
      <label
        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
        htmlFor={attributeDescription.name}
      >
        {attributeDescription.name}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type={attributeDescription.type}
        maxLength={attributeDescription.maxLength}
        name={attributeDescription.value}
        onChange={onChange}
        defaultValue={defaultValue}
        required={attributeDescription.required}
      />
    </div>
  );
};
export default TextItem;
