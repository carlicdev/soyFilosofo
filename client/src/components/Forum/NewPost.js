import React, { useState } from 'react';

const NewPost = ({newComment}) => {
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        newComment(content)
        setContent('');
    }

    return (
        <div className='mx-auto bg-gray-900 border border-black max-w-4xl rounded'>
            <div className='bg-black w-full p-1 text-gray-100 rounded-t'>Nuevo mensaje</div>
            <div className='container p-2'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <textarea rows='5' className='w-full mx-auto focus:outline-none p-1 rounded text-gray-900 bg-gray-400'
                            name='content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button type='submit' className='text-gray-100 rounded bg-black pb-1  pt-2 px-4 focus:outline-none hover:bg-gray-900'>
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPost;
