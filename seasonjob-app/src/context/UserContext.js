
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: null,
        firstName: '',
        lastName: '',
        phone: '',
        email: 'PeterMartin@gmail.com',
        createdAt: '',
        subscription: '',
        subscription_startDate: '',
        subscription_endDate: '',
        company_id: null,
        establishments: null,
        password: 'password',
        token: null,
    });

    return (
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
