
const Table = () => {
    return (
        <div>
        <table className='min-w-full table-auto'>
        <thead>
            <tr className='bg-gray-800'>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Name</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Email</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Salary</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Birthday</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Actions</span>
                </th>
            </tr>
        </thead>
        <tbody className='bg-gray-200'>
            <tr>
                <td className='px-16 py-2 flex flex-row items-center'>
                </td>
            </tr>
        
        </tbody>
        </table>
        </div>);
};

export default Table;