import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Post from './Post';

const ThreadDetails = ({match}) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get(`/api/forum/threads/${match.params.slug}`)
                setPosts(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getPosts();
    }, [match.params.slug]);

    return (
        <div className='p-5'>
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
        </div>
    )
}

export default ThreadDetails
