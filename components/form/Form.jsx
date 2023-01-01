import AddForm from "./AddForm";

const Form = ({ formId, columns=1, components}) => {
    return (
        <AddForm formId={formId} columns={columns} components={components} />
    );
}

export default Form;