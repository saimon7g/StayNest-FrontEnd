import axios from './axios';

// Function to set the authentication token in localStorage and axios headers
const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token); // Store token in localStorage
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Signup function
const signup = async (userData) => {
  try {
    const response = await axios.post('/auth/signup/', userData);
    return response;
  } catch (error) {
    console.error('Signup failed:', error.response.data);
    throw error;
  }
};

// Host signup function
const hostSignup = async (userData) => {
  try {
    const response = await axios.post(`/auth/host/signup/${userData.uid}`);
    return response.data;
  } catch (error) {
    console.error('Host signup failed:', error.response.data);
    throw error;
  }
};

// Login function
const login = async (username, password) => {
  try {
    const response = await axios.post('/auth/login/', { username, password });
    const token = response.data.token;
    setAuthToken(token); // Set the authentication token
    return response;
  } catch (error) {
    console.error('Login failed:', error.response.data);
    throw error;
  }
};

// Logout function
const logout = async () => {
  try {
    const response = await axios.post('/auth/logout/');
    setAuthToken(null); // Clear the authentication token
    return response.data;
  } catch (error) {
    console.error('Logout failed:', error.response.data);
    throw error;
  }
};

const getUser = async () => {
  try {
    console.log('Fetching user...api ');
    const response = await axios.get('/auth/user/');
    console.log('response.data', response.data);
    if (typeof response.data === 'string') {
     
     return JSON.parse(response.data);
    }

    return response.data;

  } catch (error) {
    console.error('Get user failed:', error.response.data);
    throw error;
  }
};  
const loggedInCheck = () => {
  
   if(localStorage.getItem('authToken')){
      return true;
    }
    else{
      return false;
    }
  
};
export { setAuthToken, signup, hostSignup, login, logout, getUser, loggedInCheck};
