import React, { useState } from 'react';  
import { FaTimes, FaCar } from 'react-icons/fa';  
import { motion } from 'framer-motion';  
import { Link } from 'react-router-dom';

const SignInModal = ({ onClose }) => {  
  const [isSignedIn, setIsSignedIn] = useState(false); // State to track sign-in status  
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // State to track account creation  

  const handleSignIn = () => {  
    setIsSignedIn(true); // Set signed-in status  
  };  

  const handleCreateAccount = () => {  
    setIsCreatingAccount(true); // Switch to create account form  
  };  

  const handleBackToSignIn = () => {  
    setIsCreatingAccount(false); // Switch back to sign-in form  
  };  

  return (  
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">  
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 sm:mx-auto">  
        <div className="flex justify-between items-center">  
          <h2 className="text-xl font-bold">{isCreatingAccount ? 'Create Account' : isSignedIn ? 'Welcome Back!' : 'Sign In'}</h2>  
          <button onClick={onClose}>  
            <FaTimes className="text-gray-500 hover:text-gray-800" />  
          </button>  
        </div>  

        <div className="mt-4 text-center">  
          {!isCreatingAccount && !isSignedIn && (  
            <>  
              <p className="mb-2 text-gray-700">Join us to discover amazing offers and features!</p>  
              <p className="mb-4 text-gray-700">Your journey starts here, and we're excited to have you!</p>  
              <motion.button  
                onClick={handleSignIn}  
                className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-200"  
              >  
                Sign In  
              </motion.button>  
              <motion.button  
                onClick={handleCreateAccount}  
                className="mt-2 w-full bg-gray-300 text-gray-700 py-2 rounded-full hover:bg-gray-400 transition duration-200"  
              >  
                Create Your Account  
              </motion.button>  
            </>  
          )}  

          {isCreatingAccount && !isSignedIn && (  
            <>  
              <p className="mb-2 text-gray-700">Fill in your details to create a new account.</p>  
              <form className="mt-4">  
                <input  
                  type="text"  
                  placeholder="Full Name"  
                  className="w-full p-2 mb-2 border rounded-lg"  
                />  
                <input  
                  type="email"  
                  placeholder="Email Address"  
                  className="w-full p-2 mb-2 border rounded-lg"  
                />  
                <input  
                  type="password"  
                  placeholder="Password"  
                  className="w-full p-2 mb-4 border rounded-lg"  
                />  
                <Link to='/research'>
                <motion.button  
                  onClick={() => alert('Account Created!')}  
                  className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-200"  
                  >  

                  Create Account  
                </motion.button>  
                  </Link>
              </form>  
              <button onClick={handleBackToSignIn} className="mt-2 text-blue-500 hover:underline">  
                Back to Sign In  
              </button>  
            </>  
          )}  

          {isSignedIn && (  
            <>  
              <p className="mb-2 text-gray-700">Log in to your account</p>  
              <form className="mt-4">  
                <input  
                  type="text"  
                  placeholder="Username"  
                  className="w-full p-2 mb-4 border rounded-lg"  
                />  
                <input  
                  type="password"  
                  placeholder="Password"  
                  className="w-full p-2 mb-4 border rounded-lg"  
                />  
                <Link to='/research'>
                <motion.button  
                  onClick={() => alert('Logged in!')}  
                  className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-200"  
                >  
                  Sign In  
                </motion.button>  
                </Link>
              </form>  
            </>  
          )}  

          {isSignedIn && (  
            <div className="mt-4 text-center">  
              <h3 className="text-lg font-semibold">Welcome back!</h3>  
              <p className="text-gray-600">You’re all set to explore your saved cars and messages!</p>  
              <hr className="my-4" />  
              <div className="flex flex-col items-center">  
                <div className="flex items-center mt-2">  
                  <FaCar className="text-gray-500" size={24} />  
                  <span className="ml-2 text-sm">View Saved Cars</span>  
                </div>  
              </div>  
            </div>  
          )}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default SignInModal;


