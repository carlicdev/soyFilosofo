import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-teal-900 w-full'>
            <div className='flex justify-around content-center p-2'>
                <h1 className='text-white text-xl mr-auto'>LOGO</h1>
                <button className='text-white ml-auto focus:outline-none hover:text-gray-600'
                    onClick={() => setIsOpen(!isOpen)}
                >
                   { isOpen ? <CgCloseR size={25}/> : <GiHamburgerMenu size={25}/> }
                </button>
            </div>
            {
                isOpen && (
                    <div className='flex flex-wrap bg-teal-800 p-2'>
                        <p className='w-full text-white mx-auto my-1 hover:bg-teal-900 rounded'>Foro</p>
                        <p className='w-full text-white mx-auto my-1 hover:bg-teal-900 rounded'>Articulos</p>
                        <p className='w-full text-white mx-auto my-1 hover:bg-teal-900 rounded'>Tienda</p>
                        <p className='w-full text-white mx-auto my-1 hover:bg-teal-900 rounded'>Usuario</p>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar;
