import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SessionContext } from '../../context/session_context';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);

    const { _login, user } = useContext(SessionContext);

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await _login(username, password);
        if (res === 'success') {
            setUsername('');
            setPassword('');
        } else {
            setErrorMsg(res)
        }
    }

    return (
        <div className='p-10'>
            {
                user ? (
                    <Redirect to='/forum'/>
                ) : (
            <div className='max-w-xs mx-auto border rounded shadow'>
                <div className='bg-teal-900 w-full p-5 rounded-t'>
                    <div className='text-2xl text-gray-100 font-semibold'>Log In</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='p-5 w-full'>
                        <div className='container w-full p-1 text-left'>
                            {
                                errorMsg && (
                                    <p className='text-sm font-thin text-red-600'>{errorMsg}</p>
                                )
                            }
                            <label className='text-gray-600 text-md '>Alias</label>
                            <input className='w-full bg-blue-100 rounded p-1 bg-gray-100 focus:outline-none focus:shadow-outline border border-gray-300'
                                    type='text'
                                    name='username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='container w-full p-1 text-left'>
                            <label className='text-gray-600 text-md '>Password</label>
                            <input className='w-full bg-blue-100 rounded p-1 bg-gray-100 focus:outline-none focus:shadow-outline border border-gray-300'
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='w-full p-2 mt-5 rounded shadow bg-teal-900 font-semibold text-gray-100 focus:outline-none hover:bg-teal-800'>
                            Log In
                        </button>
                    </div>
                </form>
            </div>
                )
            }
        </div>
    )
}

export default LoginForm;
