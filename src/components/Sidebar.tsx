import React from 'react';
import { Home, BookOpen, Gift } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: 'home' | 'my-blogs') => void;
  fixed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, setDarkMode, currentPage, setCurrentPage }) => {
  const menuItems = [
    { icon: Home, label: 'Home', page: 'home' as const },
    { icon: BookOpen, label: 'My Blogs', page: 'my-blogs' as const },
    { icon: Gift, label: 'Rewards', page: 'rewards' as const },
  ];

  return (
    <aside
      className="hidden md:flex w-[200px] h-full bg-gradient-to-b from-[#1a1440] to-[#181A2A] border-r border-[#23244a] shadow-xl rounded-r-3xl pt-6 z-40 transition-colors duration-300 flex-col"
    >
      <div className="flex flex-col w-full h-full">
        {/* User Profile */}
        <div className="px-6 pt-2 pb-8">
          <div className="flex items-center space-x-3">
            <img
              src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752071208/Header_-_Copy_2_tbflho.png"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-purple-500 shadow"
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
                  }}
                  className={`w-full flex items-center space-x-3 px-5 py-3 rounded-xl transition-colors text-base font-semibold shadow-sm
                    ${currentPage === item.page
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-[#23244a]'}
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Optional: Add a bottom section for settings or dark mode toggle */}
        {/* <div className="px-6 py-4 border-t border-[#23244a]">
          <button onClick={() => setDarkMode(!darkMode)} className="w-full py-2 rounded-lg bg-[#23214a] text-gray-300 hover:bg-purple-600 transition-colors font-medium">Toggle Dark Mode</button>
        </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;