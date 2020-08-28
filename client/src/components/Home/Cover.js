import React from 'react';
import { GiFeather } from 'react-icons/gi';

const Cover = () => {
    return (
        <div className='cover flex flex-wrap justify-center content-center h-screen'>
            <p className='text-white font-semibold text-6xl inline'>Soy<span className='text-teal-300 '> <GiFeather className='inline'/> </span> Filósofo</p>
        </div>
    )
}

export default Cover;
