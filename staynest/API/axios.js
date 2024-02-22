import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Set the authorization header if token exists in localStorage on initialization (client-side only)
if (typeof window !== 'undefined') {
  const storedToken = localStorage.getItem('authToken');
  if (storedToken) {
    axios.defaults.headers.common['Authorization'] = `Token ${storedToken}`;
  }
}

export default axios;
