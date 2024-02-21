import axios from 'axios';

// Set the base URL for your backend API
axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
// Export the configured Axios instance for use in other files
export default axios;
