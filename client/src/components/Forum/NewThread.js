import { AlexaForBusiness } from 'aws-sdk';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { SessionContext } from '../../context/session_context';

const NewThread = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { user } = useContext(SessionContext);

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await axios.post('/api/forum/new-thread', {
            title, 
            content,
            userId: user.userId,
            categoryId: '5f5537493ea42c2ac8300bed'
        });
        console.log(res);
        setTitle('');
        setContent('');
    }

    return (
        <div className='mx-auto bg-gray-900 border border-black max-w-4xl rounded'>
            <div className='bg-black w-full p-1 text-gray-100 rounded-t text-left'>Nuevo Tema</div>
            <div className='container p-2'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className='w-full mx-auto focus:outline-none rounded p-1 text-gray-900 bg-gray-400 my-1' 
                                name='title'
                                value={title}
                                placeholder='Titulo'
                                onChange={(e) => setTitle(e.target.value)}        
                        />
                        <textarea rows='8' className='w-full mx-auto focus:outline-none p-1 rounded text-gray-900 bg-gray-400 my-1'
                            name='content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button type='submit' className='text-gray-100 rounded bg-green-700 pb-1  pt-2 px-4 focus:outline-none hover:bg-green-800'>
                            Crear Tema
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewThread;
