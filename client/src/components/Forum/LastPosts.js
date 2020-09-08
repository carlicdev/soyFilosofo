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
            setPosts(res.data);
        }
        getPosts();
    },[])

    return (
        <div className='w-full border'>
            <button className='bg-teal-900 text-white  w-full p-2 focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
            >
                Ultimos Mensajes
            </button>
            <div className={`${ isOpen ? '' : 'hidden'} text-gray-900 w-full`}>
                {
                    posts && (
                        posts.map(i => {
                            return (
                                <div key={i._id} className='w-full p-1'>
                                    <Link to={`/forum/${i.threadId.slug}`}>
                                    <div className='w-full bg-teal-800 text-gray-100'>
                                        <div className=' text-sm'>
                                            {i.threadId.categoryId}
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap p-1'>
                                        <div className='font-light text-left text-sm font-semibold w-1/2'>
                                            {i.threadId.title}
                                        </div>
                                        <div className='font-light text-sm w-1/2 text-right'>
                                            <Moment format='DD/MM/YYYY'>
                                            {i.created}
                                            </Moment>
                                        </div>
                                        <div className='font-light text-sm w-full text-left'>
                                            {i.content}...
                                        </div>
                                        <div className='font-light text-xs text-right w-full'>
                                            por <span className='italic' >{i.userId.username}</span>
                                        </div>
                                    </div>
                                    </Link>
                                    <hr/>
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
