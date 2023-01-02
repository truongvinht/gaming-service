import AddForm from "./AddForm";
import EditForm from "./EditForm";

const Form = ({ formId, columns=1, components}) => {

    const flag = true;

    return (
        <div className="container mx-auto">
            {flag?<AddForm formId={formId} columns={columns} components={components} />:
            <EditForm formId={formId} columns={columns} components={components} />}
            
        </div>
    );
}

export default Form;