import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios';
import Post from './Post';
import NewPost from './NewPost';
import { SessionContext } from '../../context/session_context';
import LoginForm from '../UserForms/LoginForm';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import LastPosts from './LastPosts';

const ThreadDetails = ({match}) => {
    const [posts, setPosts] = useState(null);
    const [threadId, setThreadId] = useState(null);

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

    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3 p-5'>
            <Breadcrumb slug={match.params.slug} />
        {
            !posts && <p>Loading...</p>
        }
        {
            posts && (
                posts.map(i => {
                    return <Post key={i._id} post={i} />
                })
            )
        }
        {
            user ? <NewPost newComment={newComment} /> : <LoginForm />
        }
            </div>
            <div className='col-span-1'>
                <LastPosts />
            </div>
        </div>
    )
}

export default ThreadDetails
