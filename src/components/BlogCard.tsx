import React from 'react';
import { Heart, MessageCircle, Bookmark, Clock, User, TrendingUp } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  category: string;
  trending?: boolean;
}

interface BlogCardProps {
  blog: BlogPost;
  darkMode: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, darkMode }) => {
  return (
    <div className={`group relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {blog.trending && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>Trending</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {blog.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-lg font-semibold mb-2 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-purple-500 transition-colors`}>
          {blog.title}
        </h3>
        
        <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {blog.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <User className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{blog.readTime}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className={`flex items-center space-x-1 transition-colors ${darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>
              <Heart className="w-4 h-4" />
              <span className="text-sm">{blog.likes}</span>
            </button>
            <button className={`flex items-center space-x-1 transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'}`}>
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{blog.comments}</span>
            </button>
          </div>
          <button className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-500 hover:text-purple-500'}`}>
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;