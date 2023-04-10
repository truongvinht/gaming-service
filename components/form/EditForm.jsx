import { useQuery } from 'react-query';
import { getUser } from '../../utils/apiHandler';
import FormItem from './ItemHelper';
import { GreenButton } from '../CustomButton';

/**
 * Component for form
 */
const EditForm = ({
  formId,
  columns = 1,
  handleSubmit,
  handleDelete = null,
  objForm,
  components,
  formData,
  setFormData,
  objectId,
}) => {
  const formClass = `w-full grid grid-cols-${columns} gap-3 py-3`;

  const { isLoading, isError, data, error } = useQuery(
    ['users', objectId],
    () => getUser(objectId)
  );
  // const {username} =  data;

  if (isLoading) {
    return <div>Wird geladen...</div>;
  }

  if (isError) {
    return <div>Fehler beim Laden...</div>;
  }

  if (components === undefined) {
    return <div>Input missing!</div>;
  }

  return (
    <form className={formClass} id={formId} onSubmit={handleSubmit}>
      {components.map((obj) => (
        <FormItem
          key={obj.name}
          attributeDescription={obj}
          onChange={setFormData}
        />
      ))}
      <GreenButton label="Speichern" type="submit" customStyle="w-2/6" />
      {handleDelete !== null ? (
        <button
          className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
          type="button"
        >
          Löschen
        </button>
      ) : (
        <div />
      )}
    </form>
  );
};

export default EditForm;
