import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode?: boolean;
  currentPage: string;
  setCurrentPage: (page: 'home' | 'shop' | 'explore-nfts' | 'blog' | 'my-blogs' | 'profile' | 'rewards') => void;
  onSidebarToggle?: () => void;
}

const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'Shop', page: 'shop' },
  { label: 'Explore NFTs', page: 'explore-nfts' },
  { label: 'Blog', page: 'blog' },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode = false, currentPage, setCurrentPage, onSidebarToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between bg-gradient-to-r from-[#1a1440] to-[#1a1a2e] shadow-lg relative">
      {/* Left: Logo & Brand */}
      <div className="flex items-center space-x-3">
        {/* Sidebar toggle for mobile (only visible on mobile) */}
        <button
          className="md:hidden mr-2 text-white p-2 rounded-lg hover:bg-[#23214a] focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={onSidebarToggle}
          aria-label="Open sidebar menu"
          tabIndex={0}
        >
          <Menu className="w-7 h-7" />
        </button>
        <img
          src="https://res.cloudinary.com/da8ptobvx/image/upload/v1751980304/Header_-_Copy_paqzpv.png"
          alt="Logo"
          className="w-10 h-10 rounded-full object-contain"
        />
        <span className="text-2xl font-extrabold tracking-wide text-white uppercase">CHEETAHHPVQ</span>
      </div>

      {/* Center: Nav Links & Search (hide on mobile) */}
      <div className="hidden md:flex flex-1 flex-col items-center">
        <div className="flex space-x-8 mb-3">
          {navLinks.map(link => (
            <button
              key={link.page}
              onClick={() => setCurrentPage(link.page as any)}
              className={`text-white font-medium hover:text-purple-400 transition relative ${currentPage === link.page ? 'font-bold' : ''}`}
            >
              {link.label}
              {currentPage === link.page && <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-500 rounded-full"></span>}
            </button>
          ))}
        </div>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full pl-12 pr-4 py-2 rounded-full bg-[#23214a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-[#2d295e]"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Right: Icons, Avatar, Greeting (hide on mobile) */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Glowing icon placeholder */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 shadow-lg animate-pulse">
          <span className="text-white text-xl">🎨</span>
        </div>
        {/* Cart icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#23214a]">
          <ShoppingCart className="w-6 h-6 text-white" />
        </div>
        {/* User avatar */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover"
        />
        {/* Greeting and dropdown */}
        <div className="flex items-center space-x-1">
          <span className="text-white font-medium">Hi, Precious</span>
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Mobile Dropdown Menu (not sidebar) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181A2A] z-50 flex flex-col items-center py-4 shadow-lg md:hidden animate-fade-in">
          {navLinks.map(link => (
            <button
              key={link.page}
              onClick={() => {
                setCurrentPage(link.page as any);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-6 py-3 text-white font-medium hover:text-purple-400 transition ${currentPage === link.page ? 'font-bold' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 