import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update user profile with the name
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      // Send email verification
      await sendEmailVerification(userCredential.user);

      // Show verification message
      setSubmitted(true);
    } catch (err) {
      console.error("Signup Error:", err.message);
      setError(err.message);
    }
  };
  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      console.error("Google Signup Error:", err.message);
      setError("Google signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/foodpic.png')] bg-cover bg-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Almost There!
            </h2>
            <p className="text-gray-700">
              We've sent a verification link to{" "}
              <span className="font-semibold">{formData.email}</span>.
              <br />
              Please check your email and verify your account to start using{" "}
              <span className="text-green-700 font-semibold">FlavourHunt</span>.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">
              Create Your Account
            </h2>

            {error && (
              <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={handleGoogleSignUp}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-semibold transition"
            >
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRLOiuW8UxRuAbQntCB7RB6Aoh7t2UcN_JHT9RGeSR-6nJ27N6odevUewJOpDGOyCfYehTOCU9kR7sNPJc3ckgFHQblfaCYFeYWoMEfQA" 
                alt="Google logo"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 hover:underline">
            Login
          </Link>
        </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
