import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdComment } from 'react-icons/md';

const Thread = ({thread}) => {
    return (
        <div className='bg-gray-100 border max-w-4xl border-gray-400 p-2 mx-auto'>
            <div className='grid grid-cols-5'>
                <div className='col-span-4'>
                    <p className='text-xl text-left font-semibold text-teal-800'>
                        <Link to={`/forum/${thread.slug}`}>
                            {thread.title}
                        </Link>
                    </p>
                </div>
                <div className='col-span-1'>
                    <p className='text-sm text-right italic'>{thread.date}</p>
                </div>
            </div>
            <div className='grid grid-cols-3 text-center'>
                <div className='col-span-1'>
                    <p className='text-sm italic text-left'>Started by: <span className='not-italic'>{thread.author}</span></p>
                </div>
                <div className='col-span-1'>
                    <p className='text-sm text-gray-700'><span className='text-teal-700'><FaEye className='inline mb-1 ' size={20}/></span> {thread.views}</p>
                </div>
                <div className='col-span-1'>
                    <p className='text-sm text-right text-gray-700'><span className='text-teal-700'><MdComment className='inline mb-1' size={20} /></span> {thread.comments.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Thread
