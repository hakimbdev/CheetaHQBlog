import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import BlogCard from './components/BlogCard';
import FeaturedBlog from './components/FeaturedBlog';
import MyBlogs from './pages/MyBlogs';
import Rewards from './pages/Rewards';
import Shop from './pages/Shop';
import ExploreNFTs from './pages/ExploreNFTs';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { mockBlogs } from './data/mockBlogs';
import { Plus } from 'lucide-react';
import Slider from './components/Slider';
import CreatePostModal from './components/CreatePostModal';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'my-blogs' | 'rewards' | 'shop' | 'explore-nfts' | 'blog' | 'profile'>('home');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [blogs, setBlogs] = useState(mockBlogs);

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
      <Navbar darkMode={false} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={(post) => {
          setBlogs([
            {
              id: (blogs.length + 1).toString(),
              title: post.title,
              description: post.description,
              image: post.image || 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
              author: 'Precious',
              date: 'Just now',
              readTime: '5 min read',
              likes: 0,
              comments: 0,
              category: post.category,
            },
            ...blogs,
          ]);
        }}
      />
      {/* Layout wrapper: sidebar + main content (sidebar is now part of the flex row, not fixed) */}
      <div className="flex w-full max-w-full">
        {/* Sidebar, merged with main body */}
        <div className="hidden md:block">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} currentPage={currentPage} setCurrentPage={setCurrentPage} fixed={false} />
        </div>
        {/* Main Content */}
        <main className="flex-1 w-0 bg-gradient-to-b from-[#181A2A] to-[#23214a] pt-6 md:pt-8 pb-0 px-2 md:px-4">
          {currentPage === 'home' ? (
            <div>
              {/* Slider above header */}
              <div className="mb-4">
                <Slider />
              </div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-white">Discover Stories</h1>
                  <p className="text-lg mt-2 text-gray-300">Explore the latest articles and insights from our community</p>
                </div>
                <button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2 group shadow-lg"
                  onClick={() => setShowCreateModal(true)}
                >
                  <Plus className="w-5 h-5" />
                  <span>Create Post</span>
                </button>
              </div>

              {/* Featured Blog */}
              <div>
                <FeaturedBlog darkMode={darkMode} />
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} darkMode={darkMode} />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-8">
                <button className="px-8 py-3 rounded-lg font-medium transition-colors shadow border bg-[#23214a] text-gray-200 hover:bg-[#181A2A] border-[#2d295e]">
                  Load More Articles
                </button>
              </div>

              {/* Related Content Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">Related Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {blogs.slice(0, 3).map((blog) => (
                    <div key={`related-${blog.id}`} className="bg-[#23214a] rounded-lg p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                          <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{blog.category}</span>
                          <span>•</span>
                          <span>{blog.readTime}</span>
                        </div>
                        <h3 className="font-semibold text-white text-sm">{blog.title}</h3>
                        <p className="text-gray-300 text-xs line-clamp-2">{blog.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-xs">{blog.author}</span>
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-400 text-xs">❤️ {blog.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : currentPage === 'my-blogs' ? (
            <MyBlogs darkMode={darkMode} />
          ) : currentPage === 'shop' ? (
            <Shop darkMode={darkMode} />
          ) : currentPage === 'explore-nfts' ? (
            <ExploreNFTs darkMode={darkMode} />
          ) : currentPage === 'blog' ? (
            <Blog darkMode={darkMode} />
          ) : currentPage === 'profile' ? (
            <Profile darkMode={darkMode} />
          ) : (
            <Rewards />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;