import React, { useState, useEffect, useContext } from 'react'
import AddProfileImage from '../UserForms/AddProfileImage'
import { SessionContext } from '../../context/session_context'
import axios from 'axios';

const Dashboard = () => {
    const { user } = useContext(SessionContext);
    const [userData, setUserData] = useState(null);
    const [changeImage, setChangeImage] = useState(false);

    useEffect(() => {
        const getData = async () => {
            if(user) {
                const res = await axios.get(`/api/users/user-data/${user.userId}`);
                setUserData(res.data)
            }
        }
        getData();
    }, [])

    return (
        <div>
            {
                userData && (
                    <div className='max-w-lg mx-auto text-justify row'>
                        <div className='flex flex-wrap content-center'>
                            <div className='md:w-1/2 w-full'>
                                <img src={`https://my-demo-bucket-123.s3.us-east-2.amazonaws.com/${userData.profileImageUrl}`} alt='profile' className='mx-auto w-16 h-16 rounded-full' />
                                <button className='bg-red-700 rounded px-4 py-2 focus:outline-none text-sm mt-2 mx-auto'
                                        onClick={() => setChangeImage(!changeImage)}
                                    >
                                    Cambiar Imagen 
                                </button>
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <div className='text-gray-100'>Username: {userData.username} </div>
                                <div className='text-gray-100'>Firstname: {userData.firstname} </div>
                                <div className='text-gray-100'>Lastname: {userData.lastname} </div>
                                <div className='text-gray-100'>Email: {userData.email} </div>
                            </div>
                        </div>
                            {
                                changeImage && (
                                    <AddProfileImage />                    
                                )
                            }
                    </div>
                )
            }
        </div>
    )
}

export default Dashboard
