import React from 'react';
import { Home, BookOpen, Gift } from 'lucide-react';

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
    <div className="fixed left-0 top-0 h-full w-64 bg-[#181A2A] border-r border-[#23244a] flex flex-col z-40 transition-colors duration-300 mt-32">
      {/* User Profile with reduced top padding */}
      <div className="px-6 pt-4 pb-8">
        <div className="flex items-center space-x-3">
          <img
            src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752071208/Header_-_Copy_2_tbflho.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
          />
          <div>
            <h3 className="font-semibold text-white text-base leading-tight">Hi, Precious</h3>
            <p className="text-xs text-gray-400">Precious30@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => {
                  if (item.page === 'home' || item.page === 'my-blogs') {
                    setCurrentPage(item.page);
                  }
                  // TODO: Implement navigation for 'rewards' if needed
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-base font-medium
                  ${currentPage === item.page
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-[#23244a]'}
                `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;