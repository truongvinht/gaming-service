/* eslint-disable react/button-has-type */
export const DefaultButton = ({
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

export const GreenButton = ({
  label,
  type,
  onClick = undefined,
  customStyle = undefined,
}) => {
  let defaultStyle =
    'bg-green-500 text-white hover:bg-gray-50 hover:border-green-500 hover:text-gray-800 rounded-md';

  if (customStyle !== undefined) {
    defaultStyle = `${defaultStyle} ${customStyle}`;
  }

  return (
    <DefaultButton
      label={label}
      type={type}
      onClick={onClick}
      customStyle={defaultStyle}
    />
  );
};

export const RedButton = ({
  label,
  type,
  onClick = undefined,
  customStyle = undefined,
}) => {
  let defaultStyle =
    'bg-red-500 text-white hover:bg-red-400 hover:border-green-500 hover:text-gray-800 rounded-md';

  if (customStyle !== undefined) {
    defaultStyle = `${defaultStyle} ${customStyle}`;
  }

  return (
    <DefaultButton
      label={label}
      type={type}
      onClick={onClick}
      customStyle={defaultStyle}
    />
  );
};
