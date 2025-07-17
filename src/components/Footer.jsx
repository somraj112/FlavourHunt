import {Link} from 'react-router-dom'
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Flavour Hunt</h3>
              <p className="text-gray-300 mb-4">
                Discover delicious recipes and culinary inspiration for every occasion. Join our community of food lovers and share your passion for cooking.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Home</Link></li>
                <li><Link to="/recipes" className="text-gray-300 hover:text-green-400">Recipes</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-green-400">Blog</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-green-400">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-green-400">Contact us</Link></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-2">Email: flavour@hunt.com</p>
              <p className="text-gray-300 mb-4">Phone: +91 (555) 123-4567</p>
  
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-green-400" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-green-400" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-green-400" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-12 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Flavour Hunt. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  