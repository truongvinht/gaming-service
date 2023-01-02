
const Message = ({msg, status = 0}) => {
    if (status == 0) {
        return (
            <div className='success container mx-auto py-2'>
                <div className='flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5'>
                    {msg} 
                </div>
            </div>
        );
    } else {
        return (
            <div className='error container mx-auto py-2'>
                <div className='flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5'>
                    {msg} 
                </div>
            </div>
        );
    }
}

export default Message;