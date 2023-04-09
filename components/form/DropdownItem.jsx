const DropdownItem = ({ name, items, onChange }) => {
  return (
    <div>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {name}
      </label>
      <div className="mb-3 xl:w96">
        <select data-te-select-init onChange={onChange}>
        {items.map((item => (
            <option value={item.value}>{item.name}</option>
          )))}
        </select>
      </div>
    </div>
  );
};

export default DropdownItem;
