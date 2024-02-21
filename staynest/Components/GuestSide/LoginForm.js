import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { login } from '@/API/auth.js';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';


const LoginForm = ({ isOpen, onClose, setLoginFormVisible, setLoggedIn ,setSignupFormVisible}) => {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [loginError, setLoginError] = useState(false); // State to track login error

  useEffect(() => {
    if (isOpen) {
      // Focus the username input field when the modal is opened
      setIsUsernameFocused(true);
    } else {
      // Reset the focus state when the modal is closed
      setIsUsernameFocused(false);
    }
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    login(username, password)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoggedIn(true);
          setLoginFormVisible(false);
        } else {
          setLoginError(true); // Set login error state to true
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginError(true); // Set login error state to true
      });
    console.log('Form submitted');
  };

  const handleLostPassword = () => {
    // Add your logic for handling lost password here
    console.log('Lost password link clicked');
  };

  const handleCreateAccount = () => {
    setLoginFormVisible(false); // Close the login modal
    setSignupFormVisible(true); // Open the signup modal
};

  return (
    <>
      <Modal show={isOpen} size="md" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            {loginError && ( // Render the alert if loginError state is true
              <Alert color="failure" icon={HiInformationCircle}>
                <span className="font-medium">Login failed!</span> Please check your username and password and try again.
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Your username" />
                </div>
                <TextInput id="username" placeholder="username" required autoFocus={isUsernameFocused} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500" onClick={handleLostPassword}>
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button type="submit">Log in to your account</Button>
              </div>
            </form>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500" onClick={handleCreateAccount}>
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
    </>
  );
};

export default LoginForm;
