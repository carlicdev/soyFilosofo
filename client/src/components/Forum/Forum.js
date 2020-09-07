import React, { useContext } from 'react'
import { ForumContext } from '../../context/forum_context'
import Thread from './Thread';

const Forum = () => {
    const { threads } = useContext(ForumContext);
    return (
        <div className='px-5'>
            <h1>Hello from Forum</h1>
            {
                !threads && (
                    <p>Loading...</p>
                )
            }
            {
                threads && (
                    threads.map(i  => {
                        return <Thread key={i._id} thread={i} />
                    })
                )
            }
        </div>
    )
}

export default Forum
