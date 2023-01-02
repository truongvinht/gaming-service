import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";


const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Form = ({ formId, columns=1, components}) => {

    let objectId = useSelector((state) => state.app.client.objectId);
    // console.log(objectId);
    const [formData, setFormData] = useReducer(formReducer, {}); 

    return (
        <div className="container mx-auto">
            {objectId?EditForm({formId, columns, components, formData, setFormData, objectId}): AddForm({formData, setFormData, formId, columns, components})}
            
        </div>
    );
}

export default Form;