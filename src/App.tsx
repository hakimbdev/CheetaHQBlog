import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import BlogCard from './components/BlogCard';
import FeaturedBlog from './components/FeaturedBlog';
import MyBlogs from './pages/MyBlogs';
import Rewards from './pages/Rewards';
import { mockBlogs } from './data/mockBlogs';
import { Plus } from 'lucide-react';

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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Topbar darkMode={darkMode} />
      
      {/* Main Content */}
      <main className="ml-64 pt-16">
        {currentPage === 'home' ? (
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Discover Stories
                </h1>
                <p className={`text-lg mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Explore the latest articles and insights from our community
                </p>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2 group">
                <Plus className="w-5 h-5" />
                <span>Create Post</span>
              </button>
            </div>

            {/* Featured Blog */}
            <FeaturedBlog darkMode={darkMode} />

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['All', 'React', 'Web3', 'CSS', 'Blockchain', 'Next.js', 'Testing', 'API'].map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    tag === 'All'
                      ? 'bg-purple-600 text-white'
                      : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'}`
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} darkMode={darkMode} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
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
  );
}

export default App;