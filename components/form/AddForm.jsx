import { useQueryClient, useMutation } from 'react-query';
import FormItem from './ItemHelper';
import { GreenButton } from '../CustomButton';
import Message from '../Message';
import { addUser, getUsers } from '../../utils/apiHandler';

/**
 * Component for form
 */
const AddForm = ({
  formId,
  columns = 1,
  components,
  formData,
  setFormData,
}) => {
  const formClass = `w-full grid grid-cols-${columns} gap-3 py-3`;

  if (components === undefined) {
    return <div>Input missing!</div>;
  }
  const queryClient = useQueryClient();
  const addMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.prefetchQuery('users', getUsers);
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) return console.log('empty');
    let { username, firstname, surname, email, password } = formData;

    const model = {
      username,
      firstname,
      surname,
      email,
      password,
    };
    addMutation.mutate(model);
  };

  if (addMutation.isLoading) return <div>Wird geladen...</div>;
  if (addMutation.isError)
    return <div>Fehlgeschlagen... {addMutation.error.message}</div>;

  if (addMutation.isSuccess) {
    return <Message msg={'Daten wurden gespeichert'}></Message>;
  }

  return (
    <form className={formClass} id={formId} onSubmit={onSubmit}>
      {components.map((obj) => (
        <FormItem
          key={obj.name}
          attributeDescription={obj}
          onChange={setFormData}
        />
      ))}
      <GreenButton label="Anlegen" type="submit" customStyle="w-2/6" />
    </form>
  );
};

export default AddForm;
