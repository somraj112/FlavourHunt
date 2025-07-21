import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path if needed

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-orange-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">✅ Almost There!</h2>
            <p className="text-gray-700">
              We've sent a verification link to <span className="font-semibold">{formData.email}</span>.
              <br />Please check your email and verify your account to start using <span className="text-green-700 font-semibold">FlavourHunt</span>.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">Create Your Account</h2>
            
            {error && (
              <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
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
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
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
                <label className="block text-sm font-medium text-gray-700">Password</label>
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
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
