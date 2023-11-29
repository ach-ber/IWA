
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: null,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        createdAt: '',
        subscription: '',
        subscription_startDate: '',
        subscription_endDate: '',
        company_id: null,
        establishments: [],
        password: '',
        token: null,
        login: false
    });

    return (
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
