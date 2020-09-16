import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await axios.post('/api/users/signup', {
            username,
            firstname,
            lastname,
            email,
            password,
            confirmPassword
        });

        if(res.status === 201) {
            setErrorMsg(null);
            setUsername('');
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setSuccess('Bienvenido filósofo. Gracias por registrarte!')
        }
        
        if (res.status === 200) {
            setErrorMsg(res.data.error)
        }
    }

    return (
        <div className='container'>
        {
            success && (
                <p>Success</p>
            )
        }
            <div className='max-w-md mx-auto border rounded shadow bg-gray-200'>
                <div className='bg-black w-full p-5 rounded-t'>
                    <div className='text-2xl text-gray-100 font-semibold'>Registro</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='p-5 w-full'>
                        <div className='flex flex-wrap justify-around'>
                            <div className='container md:w-1/2 text-left mb-2 p-1'>
                                <label className='text-gray-600 text-md'>Alias</label>
                                <input className='w-full rounded p-1 focus:outline-none focus:shadow-outline border border-gray-300 bg-blue-100 text-gray-900'
                                    type='text'
                                    name='username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {
                                    errorMsg && errorMsg.username ? (
                                        <p className='text-sm text-red-700 font-thin'>{errorMsg.username}</p>
                                    ) : null
                                }
                            </div>
                            <div className='container md:w-1/2 text-left mb-2 p-1'>
                                <label className='text-gray-600 text-md'>Email</label>
                                <input className='w-full rounded p-1 focus:outline-none focus:shadow-outline border border-gray-300 bg-blue-100 text-gray-900'
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {
                                    errorMsg && errorMsg.email ? (
                                        <p className='text-sm text-red-700 font-thin'>{errorMsg.email}</p>
                                    ) : null
                                }
                            </div>
                            <div className='container md:w-1/2 text-left mb-2 p-1'>
                                <label className='text-gray-600 text-md'>Nombre</label>
                                <input className='w-full rounded p-1 focus:outline-none focus:shadow-outline border border-gray-300 bg-blue-100 text-gray-900'
                                    type='text'
                                    name='firstname'
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                                {
                                    errorMsg && errorMsg.firstname ? (
                                        <p className='text-sm text-red-700 font-thin'>{errorMsg.firstname}</p>
                                    ) : null
                                }
                            </div>
                            <div className='container md:w-1/2 text-left mb-2 p-1'>
                                <label className='text-gray-600 text-md'>Apellido</label>
                                <input className='w-full rounded p-1 focus:outline-none focus:shadow-outline border border-gray-300 bg-blue-100 text-gray-900'
                                    type='text'
                                    name='lastname'
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                                {
                                    errorMsg && errorMsg.lastname ? (
                                        <p className='text-sm text-red-700 font-thin'>{errorMsg.lastname}</p>
                                    ) : null
                                }
                            </div>
                            <div className='container md:w-1/2 text-left md:mb-5 mb-2 p-1'>
                                <label className='text-gray-600 text-md'>Password</label>
                                <input className='w-full rounded p-1 focus:outline-none focus:shadow-outline border border-gray-300 bg-blue-100 text-gray-900'
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {
                                    errorMsg && errorMsg.password ? (
                                        <p className='text-sm text-red-700 font-thin'>{errorMsg.password}</p>
                                    ) : null
                                }
                            </div>
                            <div className='container md:w-1/2 text-left mb-5 p-1'>
                                <label className='text-gray-600 text-md'>Confirmar Password</label>
                                <input className='w-full rounded p-1 focus:outline-none focus:shadow-outline border border-gray-300 bg-blue-100 text-gray-900'
                                    type='password'
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type='submit' className='w-full p-2 rounded shadow bg-black font-semibold text-gray-100 focus:outline-none hover:bg-teal-800'>
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
