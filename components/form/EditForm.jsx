import FormItem from "./FormItem";
import GreenButton from "../buttons/GreenButton";
import  Message  from "../Message";

import { useQuery } from "react-query";
import { getUser } from "../../utils/helper";

/**
 * Component for form
 */
const EditForm = ({ formId, columns=1, handleSubmit, handleDelete=null, objForm, components, formData, setFormData, objectId}) => {

    const formClass = `w-full grid grid-cols-${columns} gap-3 py-3`;

    console.log(objectId);
    const {isLoading, isError, data, error} = useQuery(['users', objectId], () => getUser(objectId));
    // const {username} =  data;


     if (isLoading) {
        return (<div>Wird geladen...</div>);
    }

    if (isError) {
        return (<div>Fehler beim Laden...</div>);
    }
    console.log(data);

    if (components == undefined) {
        return (<div>Input missing!</div>);
    }
    

    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length == 0)return console.log('empty');
        console.log(formData);

    };

    return (
        <form className={formClass} id={formId} onSubmit={onSubmit}>
                {components.map((obj) => (
                    <FormItem key={obj.name} attribute_desc={obj} onChange={setFormData} />
                ))}
                <GreenButton label={'Speichern'} type='submit'  customStyle={'w-2/6'}/>
                {handleDelete!==null?<button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleDelete}  type="button">
                Löschen
                </button>:<div />}
                
            </form>
    );
}

export default EditForm;