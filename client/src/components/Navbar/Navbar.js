import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu, GiFeather } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { SessionContext } from '../../context/session_context';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(SessionContext);

    return (
        <div className='bg-teal-900 w-full'>
            <div className='flex justify-around content-center p-2'>
                <h1 className='text-white text-xl mr-auto'>
                    <Link to='/'>
                        <GiFeather size={30} />
                    </Link>
                </h1>
                {
                    user && (
                        <p className='text-white text-sm font-thin'>{user.username}</p>
                    )
                }
                <button className='text-white ml-auto focus:outline-none hover:text-gray-600'
                    onClick={() => setIsOpen(!isOpen)}
                >
                   { isOpen ? <CgCloseR size={25}/> : <GiHamburgerMenu size={25}/> }
                </button>
            </div>
            {
                isOpen && (
                    <div className='flex flex-wrap bg-teal-800 p-2'>
                        <Link to='/articles' className='w-full text-white mx-auto my-1 hover:bg-teal-900 rounded'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                                Articulos
                        </Link>
                        <Link to='/forum' className='w-full text-white mx-auto my-1 hover:bg-teal-900 rounded'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                                Foro
                        </Link>
                        <Link to='/store' className='w-full text-white mx-auto my-1 hover:bg-teal-900 rounded'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                                Store
                        </Link>
                        <Link to='/user' className='w-full text-white mx-auto my-1 hover:bg-teal-900 rounded'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                                User
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar;
