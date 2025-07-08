import React from 'react';
import { Home, BookOpen, BarChart3, Settings, User, Heart, Bookmark, PenTool, Search, TrendingUp, Moon, Sun, Gift } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: 'home' | 'my-blogs') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, setDarkMode, currentPage, setCurrentPage }) => {
  const menuItems = [
    { icon: Home, label: 'Home', page: 'home' as const },
    { icon: BookOpen, label: 'My Blogs', page: 'my-blogs' as const },
    { icon: Gift, label: 'Rewards', page: 'rewards' as const },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full w-64 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex flex-col z-40 transition-colors duration-300`}>
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/da8ptobvx/image/upload/v1751980304/Header_-_Copy_paqzpv.png"
            alt="CHEETAHPVQ Logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>CHEETAHPVQ</h1>
        </div>
      </div>

      {/* User Profile */}
      <div className="px-6 mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>John Doe</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Web3 Developer</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() =>
                  item.page === 'home' || item.page === 'my-blogs' || item.page === 'rewards'
                    ? setCurrentPage(item.page)
                    : undefined
                }
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? `${darkMode ? 'bg-purple-900/50 text-purple-400' : 'bg-purple-100 text-purple-700'}`
                    : `${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className="p-6 border-t border-gray-700">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;