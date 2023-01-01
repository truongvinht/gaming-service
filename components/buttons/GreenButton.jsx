import DefaultButton from "./DefaultButton";

const GreenButton = ({label, type, onClick = undefined, customStyle = undefined}) => {
    
    let defaultStyle = "bg-green-500 text-white hover:bg-gray-50 hover:border-green-500 hover:text-gray-800 rounded-md";

    if (customStyle != undefined) {
        defaultStyle =  defaultStyle + ' ' + customStyle;
    }

    return (
        <DefaultButton label={label} type={type} onClick={onClick} customStyle={defaultStyle}/>
    );
}

export default GreenButton;