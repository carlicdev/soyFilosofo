import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaUser } from 'react-icons/fa';
import { MdComment } from 'react-icons/md';

const Thread = ({thread}) => {
    return (
        <div className='bg-gray-900 border max-w-4xl border-black p-2 mx-auto'>
            <div className='grid grid-cols-5'>
                <div className='col-span-4'>
                    <p className='text-xl text-left font-semibold text-gray-100'>
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
                    <p className='text-sm italic text-left'><FaUser className='inline mb-1 text-green-700' size={15} /> <span className='not-italic'> {thread.userId.username}</span></p>
                </div>
                <div className='col-span-1'>
                    <p className='text-sm text-gray-200'><span className='text-gray-100'><FaEye className='inline mb-1 text-green-700' size={20}/></span> {thread.views}</p>
                </div>
                <div className='col-span-1'>
                    <p className='text-sm text-right text-gray-200'><span className='text-gray-100'><MdComment className='inline mb-1 text-green-700' size={20} /></span> {thread.comments}</p>
                </div>
            </div>
        </div>
    )
}

export default Thread
