import React from 'react';
import Moment from 'react-moment';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillCalendarFill } from 'react-icons/bs';

const Post = ({post, postNum}) => {
    return (
        <div className='w-full  m-1 border border-black'>
            <div className='flex bg-gray-700 text-xs text-gray-100 p-1'>
                <span className='mx-1'>
                    <BsFillCalendarFill className='inline text-green-700'/>
                </span>
                <div className='mx-1'>
                    <Moment format='DD/MM/YYYY HH:mm'>
                    {post.created}
                    </Moment>
                </div>
                <div className='mr-1 ml-auto'>
                    #{postNum}
                </div>
            </div>
            <div className='w-full col-5 lg:flex bg-gray-900'>
                <div className='hidden lg:inline lg:w-1/5  col-span-1 p-5 border border-gray-700'>
                    <div className='mx-auto text-gray-100 mb-3'>
                        {
                            post.userId.profileImageUrl.length > 1 ? 
                            <img src={`https://my-demo-bucket-123.s3.us-east-2.amazonaws.com/${post.userId.profileImageUrl}`} alt='profile' className='w-12 h-12 rounded-full mx-auto' /> 
                            :
                            <FaUserCircle size={35} className='mx-auto' />
                        }
                        <div className='font-semibold text-gray-200'>{post.userId.username}</div>
                    </div>
                    <div className='text-xs text-gray-100'>Miembro desde: 
                        <span> <Moment format='DD/MM/YYYY'>{post.userId.created}</Moment></span>
                    </div>
                    <div className='text-xs text-gray-100'>Posts: <span>{post.userId.posts}</span></div>
                </div>
                <div className='p-2 lg:inline lg:w-4/5 text-left text-gray-100 text-md lg:col-span-4 border border-gray-700'>
                    {post.content}
                </div>
            </div>
        </div>
    )
}

export default Post;
 