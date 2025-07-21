import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const navLinks = ['Home', 'Recipes', 'Blog', 'About', 'Contact'];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-200"
            >
              FlavourHunt
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700 hover:text-orange-600"
                  }`
                }
              >
                {link}
              </NavLink>
            ))}

            {user && (
              <span className="text-sm font-medium text-gray-700">
                Hello, {user.displayName || user.email.split('@')[0]}!
              </span>
            )}

            {!user ? (
              <Link
                to="/login"
                className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition-colors duration-200"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition-colors duration-200"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link}
              </NavLink>
            ))}

            {user && (
              <div className="px-3 py-2 text-gray-700 font-medium">
                Hello, {user.displayName || user.email.split('@')[0]}!
              </div>
            )}

            {!user ? (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium bg-orange-600 text-white text-center hover:bg-orange-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-orange-600 text-white hover:bg-orange-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
