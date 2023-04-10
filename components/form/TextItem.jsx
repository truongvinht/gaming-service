/**
 * Text input form item
 */
const TextItem = ({ attribute_desc, defaultValue = '', onChange }) => {
  return (
    <div className="input-type">
      <label
        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
        htmlFor={attribute_desc.name}
      >
        {attribute_desc.name}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type={attribute_desc.type}
        maxLength={attribute_desc.maxLength}
        name={attribute_desc.value}
        onChange={onChange}
        defaultValue={defaultValue}
        required={attribute_desc.required}
      />
    </div>
  );
};
export default TextItem;
