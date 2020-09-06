import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

import {allThreads} from '../data'
export const ForumContext = createContext();


const ForumContextProvider = (props) => {
    const [threads, setThreads] = useState(allThreads)

    console.log(threads);
    return (
        <ForumContext.Provider value={{threads}}>
            {props.children}
        </ForumContext.Provider>
    )
}

export default ForumContextProvider;