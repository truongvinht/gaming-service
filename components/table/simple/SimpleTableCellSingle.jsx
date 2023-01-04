// table cell with single text line
const SimpleTableCellSingle = ({text}) => {
    return (
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm break-all whitespace-normal text-white">{text}</div>
        </td>
    );
};

export default SimpleTableCellSingle