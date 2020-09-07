import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ForumContext = createContext();


const ForumContextProvider = (props) => {
    const [threads, setThreads] = useState(null);

    useEffect(() => {
        const getThreads = async () => {
            try {
                const res = await axios.get('/api/forum/threads');
                setThreads(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getThreads();
    }, []);

    return (
        <ForumContext.Provider value={{threads}}>
            {props.children}
        </ForumContext.Provider>
    )
}

export default ForumContextProvider;