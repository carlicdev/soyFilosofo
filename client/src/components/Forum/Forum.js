import React, { useContext, useState } from 'react'
import { ForumContext } from '../../context/forum_context'
import { SessionContext } from '../../context/session_context';
import Modal from '../Modal/Modal';
import NewThread from './NewThread';
import Thread from './Thread';

const Forum = () => {
    const [newThread, setNewThread] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const { threads } = useContext(ForumContext);
    const { user } = useContext(SessionContext);

    const handleClick = () => {
        if (user) {
            setNewThread(!newThread);
        } else {
            setModalOpen(!modalOpen)
        }
    }

    return (
        <div className='px-5'>
            <Modal handleModal={modalOpen} />
            <div className='w-full text-right px-10'>
            <button className='bg-green-700 px-4 py-2 rounded focus:outline-none my-1 hover:bg-green-800  mr-1 ml-auto'
                    onClick={handleClick}
            >
                Nuevo Tema
            </button> 
            </div>
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
            {
                newThread && (
                    <NewThread />
                )
            }
        </div>
    )
}

export default Forum
