// log in api usign axios
import axios from 'axios';

// Log in API
export async function LogInAPI (data)  {
    data={
        "username": "nahin",
        "password": "12345"    
    };
    try {
        const response = await axios.post("http://127.0.0.1:8000/auth/login/",data);

        const authToken = response.data.token;

        // Save the token in session storage
        sessionStorage.setItem('authToken', authToken);

        return authToken;
    } catch (error) {
        console.error('Login Error:', error);
        return null;
    }
};


