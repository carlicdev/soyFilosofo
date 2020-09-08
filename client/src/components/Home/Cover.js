import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../UserForms/LoginForm';

const Cover = ({handleModal}) => {
    return (
        <div className='cover flex flex-wrap justify-center content-center h-screen'>
            <div className='lg:grid lg:grid-cols-3'>
                <div className='col-span-2 lg:pt-32 lg:text-left text-center pt-10 cover-title'>
                    <p className='text-white lg:text-5xl text-4xl mt-5 font-semibold'>Filosofía entre amigos</p>
                    <Link to='/forum'>
                        <button className='bg-green-600 text-white rounded-full py-2 px-5 focus:outline-none'>
                            Ir al Foro
                        </button>
                    </Link>
                    <div className='flex mt-5'>
                        <div className='container text-center'>
                        <div className='text-green-600 text-4xl font-semibold mr-10 cover-title'>5</div>
                        <div className='text-gray-100 text-sm font-semibold mr-10 cover-title'>CONECTADOS</div>
                        </div>
                        <div className='container text-center'>
                        <div className='text-green-600 text-4xl font-semibold mr-10 cover-title'>25</div>
                        <div className='text-gray-100 text-sm font-semibold mr-10 cover-title'>TEMAS</div>
                        </div>
                        <div className='container text-center'>
                        <div className='text-green-600 text-4xl font-semibold mr-10 cover-title'>10</div>
                        <div className='text-gray-100 text-sm font-semibold cover-title'>COMENTARIOS</div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <LoginForm handleModal={handleModal}/>
                </div>
            </div>
        </div>
    )
}

export default Cover;
