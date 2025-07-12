import React from 'react';
import { Edit, Settings, Camera, Heart, Eye, Bookmark, Share2, Calendar, MapPin, Link, Twitter, Github, Linkedin } from 'lucide-react';

interface ProfileStats {
  posts: number;
  followers: number;
  following: number;
  likes: number;
}

interface UserPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  publishDate: string;
  likes: number;
  views: number;
  category: string;
}

interface RelatedUser {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  isFollowing: boolean;
}

const userStats: ProfileStats = {
  posts: 24,
  followers: 1247,
  following: 89,
  likes: 5678
};

const userPosts: UserPost[] = [
  {
    id: 1,
    title: "My Journey in Web3 Development",
    excerpt: "Sharing my experience learning blockchain development and building decentralized applications.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
    publishDate: "2024-01-15",
    likes: 124,
    views: 892,
    category: "Web3"
  },
  {
    id: 2,
    title: "Building Smart Contracts with Solidity",
    excerpt: "A comprehensive guide to developing secure smart contracts for Ethereum.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop",
    publishDate: "2024-01-12",
    likes: 89,
    views: 567,
    category: "Blockchain"
  },
  {
    id: 3,
    title: "React Performance Tips",
    excerpt: "Optimizing React applications for better user experience and performance.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=400&h=200&fit=crop",
    publishDate: "2024-01-10",
    likes: 156,
    views: 1234,
    category: "React"
  },
  {
    id: 4,
    title: "DeFi Protocols Explained",
    excerpt: "Understanding decentralized finance and how to interact with DeFi protocols.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
    publishDate: "2024-01-08",
    likes: 234,
    views: 1890,
    category: "DeFi"
  },
  {
    id: 5,
    title: "NFT Development Guide",
    excerpt: "Creating and deploying NFT smart contracts with metadata and IPFS storage.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop",
    publishDate: "2024-01-05",
    likes: 178,
    views: 1456,
    category: "NFTs"
  },
  {
    id: 6,
    title: "Web3 Security Best Practices",
    excerpt: "Essential security practices for Web3 developers and users.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=400&h=200&fit=crop",
    publishDate: "2024-01-03",
    likes: 267,
    views: 2100,
    category: "Security"
  }
];

const relatedUsers: RelatedUser[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    bio: "Full-stack developer passionate about Web3 and blockchain technology",
    followers: 2341,
    isFollowing: true
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    bio: "Smart contract developer and DeFi enthusiast",
    followers: 1890,
    isFollowing: false
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    bio: "Frontend developer specializing in React and modern web technologies",
    followers: 1567,
    isFollowing: true
  }
];

interface ProfileProps {
  darkMode: boolean;
}

const Profile: React.FC<ProfileProps> = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-[#23214a] rounded-xl p-6 border border-[#2d295e]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752071208/Header_-_Copy_2_tbflho.png"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-purple-500"
            />
            <button className="absolute bottom-0 right-0 bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition-colors">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white">Precious</h1>
                <p className="text-gray-300 text-sm">Precious30@gmail.com</p>
                <p className="text-gray-400 text-sm mt-2">Passionate Web3 developer and blockchain enthusiast. Building the future of decentralized applications.</p>
                
                <div className="flex items-center space-x-4 mt-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined Jan 2023</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 mt-3">
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  <Edit className="w-4 h-4 inline mr-2" />
                  Edit Profile
                </button>
                <button className="bg-[#181A2A] text-gray-300 px-4 py-2 rounded-lg border border-[#2d295e] hover:bg-[#23214a] transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#2d295e]">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{userStats.posts}</div>
            <div className="text-gray-400 text-sm">Posts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{userStats.followers}</div>
            <div className="text-gray-400 text-sm">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{userStats.following}</div>
            <div className="text-gray-400 text-sm">Following</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{userStats.likes}</div>
            <div className="text-gray-400 text-sm">Likes</div>
          </div>
        </div>
      </div>

      {/* User Posts */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">My Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userPosts.map((post) => (
            <div key={post.id} className="bg-[#23214a] rounded-xl p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-2 right-2 bg-[#181A2A] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Bookmark className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{post.category}</span>
                  <span>•</span>
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                
                <h3 className="font-semibold text-white text-lg">{post.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{post.excerpt}</p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-3 text-xs">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3 text-red-400" />
                      <span className="text-gray-300">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3 text-blue-400" />
                      <span className="text-gray-300">{post.views}</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Share2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Content Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">People You May Know</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedUsers.map((user) => (
            <div key={user.id} className="bg-[#23214a] rounded-lg p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm">{user.name}</h3>
                  <p className="text-gray-400 text-xs">{user.followers} followers</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs mb-3 line-clamp-2">{user.bio}</p>
              <button className={`w-full py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                user.isFollowing
                  ? 'bg-[#181A2A] text-gray-300 border border-[#2d295e] hover:bg-[#23214a]'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
              }`}>
                {user.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile; 