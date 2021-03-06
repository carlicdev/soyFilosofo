import React, { useState, useEffect } from 'react'
import Signup from '../UserForms/Signup';
import LoginForm from '../UserForms/LoginForm';

const Modal = ({handleModal}) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        handleModal ? setShowModal(true) : setShowModal(false)
    }, [handleModal])

    
    return (
        <div>
            {
                showModal ? (
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal' >

                        <div className='relative w-auto my-6 mx-auto max-w-lg bg-gray-400 rounded p-2'>
                            <div className='w-full text-right text-black'>
                                <button onClick={() => setShowModal(false)}>
                                    x
                                </button>
                            </div>
                            <div>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                ) : null
            }
            
        </div>
    )
}

export default Modal
