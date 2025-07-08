import React from 'react';
import { Heart, MessageCircle, Bookmark, Clock, User, TrendingUp, ArrowRight } from 'lucide-react';

interface FeaturedBlogProps {
  darkMode: boolean;
}

const FeaturedBlog: React.FC<FeaturedBlogProps> = ({ darkMode }) => {
  const featuredBlog = {
    title: "The Future of Web3 Development: Building Decentralized Applications",
    description: "Explore the latest trends and technologies in Web3 development. Learn how to build scalable decentralized applications with modern frameworks and tools.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Sarah Johnson",
    date: "2 hours ago",
    readTime: "12 min read",
    likes: 234,
    comments: 45,
    category: "Web3"
  };

  return (
    <div className={`relative ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-purple-50 to-pink-50'} rounded-2xl p-8 mb-8 overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-purple-500" />
          <span className={`text-sm font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Featured Article</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <h2 className={`text-3xl font-bold mb-4 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {featuredBlog.title}
            </h2>
            
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {featuredBlog.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <User className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{featuredBlog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{featuredBlog.readTime}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className={`flex items-center space-x-2 transition-colors ${darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>
                  <Heart className="w-5 h-5" />
                  <span>{featuredBlog.likes}</span>
                </button>
                <button className={`flex items-center space-x-2 transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'}`}>
                  <MessageCircle className="w-5 h-5" />
                  <span>{featuredBlog.comments}</span>
                </button>
                <button className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-500 hover:text-purple-500'}`}>
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2 group">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {featuredBlog.category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;