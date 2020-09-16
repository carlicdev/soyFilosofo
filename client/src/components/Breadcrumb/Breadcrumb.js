import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    return (
        <div className='w-full'>
            <div className='text-thin text-gray-400 text-left'>
                <Link to='/forum'>
                    Foro 
                </Link>
                <span> / {props.slug}</span>
            </div>
        </div>
    )
}

export default Breadcrumb
