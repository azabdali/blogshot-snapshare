import React from 'react';
import { X, Home, Flame, Compass, HelpCircle, FileText, Shield, Mail, Copyright, BarChart, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-zinc-800 border-r border-gray-200 dark:border-gray-700 shadow-md transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <div className="text-lg font-bold">BlogTube</div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-zinc-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/popular" className="flex items-center space-x-2">
                <Flame className="h-4 w-4" />
                <span>Popular</span>
              </Link>
            </li>
            <li>
              <Link to="/discover" className="flex items-center space-x-2">
                <Compass className="h-4 w-4" />
                <span>Discover</span>
              </Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <div className="p-4 mt-4 border-t dark:border-gray-700">
            <h6 className="uppercase text-xs text-gray-500 dark:text-gray-400 mb-2">You</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/statistics" className="flex items-center space-x-2">
                  <BarChart className="h-4 w-4" />
                  <span>Statistics</span>
                </Link>
              </li>
              <li>
                <Link to="/profits" className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Profits</span>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="p-4 mt-4 border-t dark:border-gray-700">
            <h6 className="uppercase text-xs text-gray-500 dark:text-gray-400 mb-2">You</h6>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Log in to access more features.</p>
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Log In
            </button>
          </div>
        )}
        <div className="p-4 mt-4 border-t dark:border-gray-700">
          <h6 className="uppercase text-xs text-gray-500 dark:text-gray-400 mb-2">Support</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-2">
                <HelpCircle className="h-4 w-4" />
                <span>Help</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Terms of Service</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 mt-4 border-t dark:border-gray-700">
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <Copyright className="h-4 w-4" />
            <span>Copyright BlogTube</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
