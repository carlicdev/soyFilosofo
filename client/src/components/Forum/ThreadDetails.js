import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios';
import Post from './Post';
import NewPost from './NewPost';
import { SessionContext } from '../../context/session_context';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import LastPosts from './LastPosts';
import Modal from '../Modal/Modal';

const ThreadDetails = ({match, handleModal}) => {
    const [posts, setPosts] = useState(null);
    const [threadId, setThreadId] = useState(null);
    const [comment, setComment] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)


    const { user } = useContext(SessionContext)

    useEffect(() => {
        console.log('useEffect getposts')
        getPosts();
    }, [match.params.slug]);

    const getPosts = async () => {
        try {
            const res = await axios.get(`/api/forum/threads/${match.params.slug}`)
            setPosts(res.data.posts);
            setThreadId(res.data.threadId)
        } catch(err) {
            console.log(err)
        }
    }

    const newComment = async (content) => {
        await axios.post('/api/forum/new-post', {content, threadId, userId: user.userId});
        getPosts();
    }

    const handleClick = () => {
        setComment(!comment);
        if (!user) {
            setModalOpen(!modalOpen)
        }
    }

    return (
        <div>
        <Modal handleModal={modalOpen} />
        <div className='grid lg:grid-cols-4 grid-cols-1'>
            <div className='col-span-3 p-5'>
                <Breadcrumb slug={match.params.slug} />
                {
                    !posts && <p>Loading...</p>
                }
                {
                    posts && (
                        posts.map(i => {
                            return <Post key={i._id} post={i} postNum={posts.indexOf(i) + 1} />
                        })
                    )
                }
                <div className='w-full flex my-2'>
                    <button className='bg-green-700 rounded px-4 py-2 text-gray-100 ml-auto focus:outline-none'
                            onClick={handleClick}
                    >
                        Comentar
                    </button>
                </div>
                {
                    comment && (
                        user && (
                            <NewPost newComment={newComment} /> 
                        )
                    ) 
                }
            </div>
            <div className='col-span-1'>
                <LastPosts />
            </div>
        </div>
        </div>
    )
}

export default ThreadDetails
