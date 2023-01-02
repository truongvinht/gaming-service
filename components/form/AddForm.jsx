import { useReducer } from "react";

import FormItem from "./FormItem";
import GreenButton from "../buttons/GreenButton";
import RedButton from "../buttons/RedButton";
import Message  from "../Message";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

/**
 * Component for form
 */
const AddForm = ({ formId, columns=1, components}) => {
    const formClass = `w-full grid grid-cols-${columns} gap-3 py-3`

    if (components === undefined) {
        return (<div>Input missing!</div>);
    }
    
    const [formData, setFormData] = useReducer(formReducer, {}); 

    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length == 0)return console.log('empty');
        console.log(formData);

    };

    if (Object.keys(formData).length == 3) {
        return (<Message msg={'Daten wurden gespeichert'}></Message>);
    }

    return (
        <form className={formClass} id={formId} onSubmit={onSubmit}>
                {components.map((obj) => (
                    <FormItem key={obj.name} attribute_desc={obj} onChange={setFormData} />
                ))}
                <GreenButton label={'Anlegen'} type='submit'  customStyle={'w-2/6'}/>
                <RedButton label={'Zurücksetzen'} type='reset'  customStyle={'w-2/6'} />
            </form>
    );
}

export default AddForm;