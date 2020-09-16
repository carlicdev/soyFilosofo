import React, { useState } from 'react';
import axios from 'axios';

const AddProfileImage = () => {
    const [file, setFile] = useState('');

    const handleChange = e => {
        setFile(e.target.files[0])
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();
        data.append('file', file);

        try {
            await axios.post('/api/users/profile-image', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch(err) {
            console.log(err);
        }
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={handleChange} className='text-xs'/>
                <button type='submit' className='bg-green-700 px-4 py-2 rounded focus:outline-none block'>Guardar</button>
            </form>
        </div>
    )
}

export default AddProfileImage
