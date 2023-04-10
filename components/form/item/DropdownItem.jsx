/* eslint-disable prettier/prettier */
/**
 * Dropdown list
 */
const DropdownItem = ({ attributeDescription, onChange }) => {
  return (
    <div>
      <label
        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
        htmlFor={attributeDescription.name}
      >
        {attributeDescription.name}
      </label>
      <div className="mb-3 xl:w96">
        <select data-te-select-init onChange={onChange}>
          {attributeDescription.items.map((entry => (
            <option value={entry.value}>{entry.name}</option>
          )))}
        </select>
      </div>
    </div>
  );
};

export default DropdownItem;
