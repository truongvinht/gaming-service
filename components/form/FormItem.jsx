import TextItem from './TextItem'
import DatetimeItem from './DatetimeItem'

const FormItem = ({attribute_desc,defaultValue, onChange}) => {

    // manual text input
    if (attribute_desc.type === 'text') {
        return (
            <TextItem attribute_desc={attribute_desc} defaultValue={defaultValue} onChange={onChange}/>
        )
    }

    // datetime
    if (attribute_desc.type === 'datetime-local') {
        return (
            <DatetimeItem attribute_desc={attribute_desc} onChange={onChange}/>
        )
    }

    return (<div />);
}

export default FormItem;