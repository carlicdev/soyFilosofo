import React from 'react';
import Moment from 'react-moment';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillCalendarFill } from 'react-icons/bs';

const Post = ({post}) => {
    return (
        <div className='w-full  m-1 border border-teal-900'>
            <div className='bg-teal-900 text-xs text-gray-100 p-1 text-left'>
                <span className='inline'>
                    <BsFillCalendarFill />
                </span>
                <div className='inline'>
                    <Moment format='DD/MM/YYYY HH:mm'>
                    {post.created}
                    </Moment>
                </div>
            </div>
            <div className='w-full col-5 lg:flex'>
                <div className='hidden lg:inline lg:w-1/5  col-span-1 p-5 border'>
                    <div className='font-semibold text-teal-800'>{post.userId.username}</div>
                    <div className='mx-auto text-teal-800'><FaUserCircle size={35} /></div>
                    <div className='text-sm text-gray-900'>Miembro desde: 
                        <span><Moment format='DD/MM/YYYY'>{post.userId.created}</Moment></span>
                    </div>
                    <div className='text-sm text-gray-900'>Posts: <span>Muchos posts</span></div>
                </div>
                <div className='p-2 lg:inline lg:w-4/5 text-left text-gray-900 text-md lg:col-span-4'>
                    {post.content}
                </div>
            </div>
        </div>
    )
}

export default Post;
 