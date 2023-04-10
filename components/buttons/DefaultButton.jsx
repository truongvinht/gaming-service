/* eslint-disable react/button-has-type */
const DefaultButton = ({
  label,
  type,
  onClick = undefined,
  customStyle = undefined,
}) => {
  // default style
  let defaultStyle = 'flex justify-center text-md px-4 py-2 border rounded-md';

  if (customStyle !== undefined) {
    defaultStyle = `${defaultStyle} ${customStyle}`;
  }

  if (onClick !== undefined) {
    // link action
    return (
      <button className={defaultStyle} onClick={onClick} type={type}>
        {label}
      </button>
    );
  }
  return (
    <button className={defaultStyle} type={type}>
      {label}
    </button>
  );
};

export default DefaultButton;
