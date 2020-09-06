import React, { useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            const userData = await axios.get('/api/users/');
            setUser(userData.data.user)
        }
        getUser();
    },[logged])

    const _login = async (username, password) => {
        try {
            const res = await axios.post('/api/users/login',{
                username, 
                password
            });
            if(res.status === 200) {
                setLogged(true)
                return 'success';
            }
        } catch(err) {
            setLogged(false)
            return 'Datos proporcionados son incorrectos'
        }      
    }
    
    return(
        <SessionContext.Provider value={{
            user,
            _login
        }}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider;