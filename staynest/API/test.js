// log in api usign axios
import axios from 'axios';
export async function LogInAPI(data) {


    data = {
        "username": "nahin",
        "password": "12345"
    }
    try {
        const response = await axios.post("http://127.0.0.1:8000/auth/login/", data);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
