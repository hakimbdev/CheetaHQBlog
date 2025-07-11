import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import BlogCard from './components/BlogCard';
import FeaturedBlog from './components/FeaturedBlog';
import MyBlogs from './pages/MyBlogs';
import Rewards from './pages/Rewards';
import Navbar from './components/Navbar';
import { mockBlogs } from './data/mockBlogs';
import { Plus } from 'lucide-react';
import Slider from './components/Slider';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'my-blogs' | 'rewards'>('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navbar at the top - OUTSIDE flex row */}
      <Navbar darkMode={false} />
      {/* Layout wrapper: sidebar + main content (sidebar is now part of the flex row, not fixed) */}
      <div className="flex w-full max-w-full">
        {/* Sidebar, merged with main body */}
        <div className="hidden md:block">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} currentPage={currentPage} setCurrentPage={setCurrentPage} fixed={false} />
        </div>
        {/* Main Content */}
        <main className="flex-1 w-0 bg-gradient-to-b from-[#181A2A] to-[#23214a] pt-8 md:pt-12 pb-0">
          {currentPage === 'home' ? (
            <div>
              {/* Slider above header */}
              <div className="mb-6">
                <Slider />
              </div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-white">Discover Stories</h1>
                  <p className="text-lg mt-2 text-gray-300">Explore the latest articles and insights from our community</p>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2 group shadow-lg">
                  <Plus className="w-5 h-5" />
                  <span>Create Post</span>
                </button>
              </div>

              {/* Featured Blog */}
              <div>
                <FeaturedBlog darkMode={darkMode} />
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['All', 'React', 'Web3', 'CSS', 'Blockchain', 'Next.js', 'Testing', 'API'].map((tag) => (
                  <button
                    key={tag}
                    className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      tag === 'All'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white border-none'
                        : 'bg-[#23214a] text-gray-200 border-[#2d295e] hover:bg-[#181A2A]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} darkMode={darkMode} />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-10">
                <button className="px-8 py-3 rounded-lg font-medium transition-colors shadow border bg-[#23214a] text-gray-200 hover:bg-[#181A2A] border-[#2d295e]">
                  Load More Articles
                </button>
              </div>
            </div>
          ) : currentPage === 'my-blogs' ? (
            <MyBlogs darkMode={darkMode} />
          ) : (
            <Rewards />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;