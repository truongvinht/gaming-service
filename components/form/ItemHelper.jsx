import TextItem from './item/TextItem';
import DatetimeItem from './item/DatetimeItem';

const ItemHelper = ({ attributeDescription, defaultValue = '', onChange }) => {
  // manual text input
  if (
    attributeDescription.type === 'text' ||
    attributeDescription.type === 'password'
  ) {
    return (
      <TextItem
        attributeDescription={attributeDescription}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    );
  }

  // datetime
  if (attributeDescription.type === 'datetime-local') {
    return (
      <DatetimeItem
        attributeDescription={attributeDescription}
        onChange={onChange}
      />
    );
  }

  return <div />;
};

export default ItemHelper;
