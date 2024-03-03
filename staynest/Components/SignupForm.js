import { Button, Checkbox, FileInput, Label, Modal, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useState } from 'react';
import { signup } from '@/API/auth.js';
import FileUpload from "@/Components/ImageUpload";

const SignupForm = ({ isOpen, onClose ,setSignupFormVisible,setLoggedIn}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    phone: '',
    agree: false,
    profilePhoto: ''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input element
    if (!file) return; // Handle case when no file is selected
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormData(prevData => ({
        ...prevData,
        profilePhoto: reader.result
      }));
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert('Password and ReType Password must match');
      return;
    }
  
    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      profile: {
        phone: formData.phone,
        profile_picture: formData.profilePhoto,
        address: 'abc',  // Add address field if needed
        nid_document: null,  // Assuming nid_document and passport_document are not included in the form data
        passport_document: null,
        superhost: false,
        

      },
    };

    signup(data)
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        alert('Successfully registered! Please login to continue');
        setSignupFormVisible(false);
      } else {
        alert('Failed to register');
      }
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to register');
    });
};
     

  return (
    <Modal show={isOpen} size="xl" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="User Name" />
            </div>
            <TextInput id="username" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Your username" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@flowbite.com" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" name="password" value={formData.password} onChange={handleChange} required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="ReType Password" />
            </div>
            <TextInput id="repeat-password" type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone" />
            </div>
            <TextInput id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="profile-photo" value="Profile Photo" />
            </div>
            <FileInput id="profile-photo" name="profilePhoto" accept="image/*" onChange={handleFileChange} required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" name="agree" checked={formData.agree} onChange={handleChange} />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SignupForm;
