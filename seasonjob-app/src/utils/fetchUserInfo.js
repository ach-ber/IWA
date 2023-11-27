import axios from 'axios';
import {useContext} from "react";
import {UserContext} from "../context/UserContext";


const fetchToken = async (email, password, setData) => {
    const [userContext, setUserContext] = useContext(UserContext);

    const backendUrl = 'http://192.168.1.194';
    try {
        const requestBody = {
            email,
            password,
        };

        const response = await axios.post('http://192.168.1.194:8090/user/api/public/token', requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        setUserContext({
            ...userContext,
            token: response.data.token,
        });
        setData(response.data.token);
    } catch (error) {
        console.error('Erreur lors de la requête au microservice :', error);
    }
};

export default fetchToken;

