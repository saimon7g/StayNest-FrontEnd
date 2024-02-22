import axios from './axios'; // Import the configured Axios instance

// Set the authentication token in request headers
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
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
    setAuthToken(token);
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
    setAuthToken(null);
    return response.data;
  } catch (error) {
    console.error('Logout failed:', error.response.data);
    throw error;
  }
};

// Export the signup, hostSignup, login, and logout functions
export { signup, hostSignup, login, logout };
