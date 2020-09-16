import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

const LastPosts = () => {
    const [posts, setPosts] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get('/api/forum/last-five-posts');
            res.data.lastFivePosts.map(i => {
                i.category = res.data.categories[0]
            })
            setPosts(res.data.lastFivePosts);
        }
        getPosts();
    },[])

    return (
        <div className='w-full border border-gray-900 my-1'>
            <button className='bg-gray-700 text-white  w-full p-2 focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
            >
                Ultimos Mensajes
            </button>
            <div className={`${ isOpen ? '' : 'hidden'} text-gray-100 w-full bg-gray-700`}>
                {
                    posts && (
                        posts.map(i => {
                            return (
                                <div key={i._id} className='w-full p-1 bg-gray-900 border border-black'>
                                    <Link to={`/forum/${i.threadId.slug}`}>
                                        <div className='grid grid-cols-4'>
                                            <div className='col-span-1'>
                                                <img src={`https://my-demo-bucket-123.s3.us-east-2.amazonaws.com/${i.userId.profileImageUrl}`} alt='profile' className='w-12 h-12 rounded-full mx-auto mt-1' /> 
                                                    <div className='font-light text-xs  w-full font-semibold'>
                                                        {i.userId.username}
                                                    </div>
                                            </div>
                                            <div className='col-span-3'>
                                                <div className='flex flex-wrap p-1'>
                                                    <div className='font-light text-left text-sm font-semibold w-1/2'>
                                                        {i.threadId.title}
                                                    </div>
                                                    <div className='font-light text-xs w-1/2 text-right text-gray-500'>
                                                        <Moment format='DD/MM/YYYY'>
                                                        {i.created}
                                                        </Moment>
                                                    </div>
                                                    <div className='font-light text-sm w-full text-left'>
                                                        {i.content}...
                                                    </div>
                                                </div>
                                                <div className='w-full text-gray-500 text-left px-1'>
                                                    <div className=' text-sm'>
                                                        {i.category.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default LastPosts;
