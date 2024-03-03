'use client';
import { useState , useEffect} from 'react';
import { Avatar, Button,Dropdown, Navbar } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/StaticImage/logo2.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiSearch, FiBell } from 'react-icons/fi'; // Import notification icon
import { formatDate } from '../utills';
import LoginForm from '@/Components/GuestSide/LoginForm';
import SignupForm from '@/Components/SignupForm';
import Link from 'next/link';
import { getUser , logout} from '@/API/auth';

const HostNavBar = ( {isLoginFormVisible,setIsLoginFormVisible, loggedIn, setLoggedIn} ) => {
    const router = useRouter();

    
    const [signupFormVisible, setSignupFormVisible] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch the user data from the server
        const fetchUser = async () => {
            console.log('Fetching user...');
            try {
                const response = await getUser();
                setUser(response);
                setLoggedIn(true);

            } catch (error) {
                console.error('Get user failed:', error);
                setLoggedIn(false);
            }
        };

        fetchUser();
    }
    , [loggedIn]);


   
    const handleLogout = async () => {
        try {
            await logout();
            setLoggedIn(false);
            setIsLoginFormVisible(true);
        } catch (error) {
            console.log('Logout failed:', error);
        }
    }
    const switchMode = () => {
        router.push('/guest');
    }

 

        

    return (
        <Navbar fluid rounded className="bg-amber-200">
            {/* Logo on the left */}
            <Navbar.Brand href="/host">
                <Image src={Logo} alt="logo" width={100} height={100} />
            </Navbar.Brand>
          
            {/* User login/profile dropdown and notification icon on the right */}
            <div className="flex items-center ml-auto">
                <FiBell className="cursor-pointer text-black mr-4" size={24} />
                {/* Notification icon */}
                {loggedIn ? ( // Check if the user is logged in
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Image src={user?.profile_picture} alt="avatar" width={40} height={40} className="rounded-full" />
                        }
                    >
                       
                        <Link href="/host/dashboard">
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                        </Link>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                        {/* Switch to toggle between host and guest modes */}
                        <div className="flex items-center ml-4">
                            <label htmlFor="switch" className="flex items-center cursor-pointer">
                                <span className="mr-2" onClick={switchMode}>Switch to guest mode</span>

                            </label>
                        </div>
                    </Dropdown>
                ) : (
                    <>
                    <Button onClick={() => setIsLoginFormVisible(true)}>Log In</Button>
                    {/* Render the LoginForm component conditionally */}
                    {isLoginFormVisible && <LoginForm isOpen={isLoginFormVisible} onClose={() => setIsLoginFormVisible(false)}
                    setLoginFormVisible={setIsLoginFormVisible} setLoggedIn={setLoggedIn} setSignupFormVisible={setSignupFormVisible}/>}
                    {signupFormVisible && <SignupForm isOpen={signupFormVisible} onClose={() => setSignupFormVisible(false)}
                    setSignupFormVisible={setSignupFormVisible} setLoggedIn={setLoggedIn}/>}
    </>
                )}
            </div>

            
        </Navbar>
    );
};

export default HostNavBar;
