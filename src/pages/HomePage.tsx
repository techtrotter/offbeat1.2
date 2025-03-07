
import React, { useState, useEffect } from 'react';
import { SearchIcon, MapPin, TrendingUp } from 'lucide-react';
import DestinationCard from '@/components/ui/DestinationCard';

// Sample data
const featuredDestinations = [
  {
    id: 1,
    name: "Lepchakha Hidden Village",
    location: "Kalimpong, North Bengal",
    image: "https://images.unsplash.com/photo-1594388212857-42c064208f49?q=80&w=2135&auto=format&fit=crop",
    rating: 4.8,
    ratingCount: 124,
    isPopular: true
  },
  {
    id: 2,
    name: "Latpanchar Viewpoint",
    location: "Darjeeling, North Bengal",
    image: "https://images.unsplash.com/photo-1574950578143-858c6fc58922?q=80&w=2787&auto=format&fit=crop",
    rating: 4.7,
    ratingCount: 98,
    isPopular: true
  },
  {
    id: 3,
    name: "Tinchuley Village",
    location: "Darjeeling, North Bengal",
    image: "https://images.unsplash.com/photo-1583245117731-a5bbc5ff8246?q=80&w=2787&auto=format&fit=crop",
    rating: 4.6,
    ratingCount: 76
  },
  {
    id: 4,
    name: "Sittong Valley",
    location: "Kurseong, North Bengal",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9e?q=80&w=2788&auto=format&fit=crop",
    rating: 4.9,
    ratingCount: 45
  }
];

const HomePage: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="mb-6">
          <h1 className="heading-md text-offbeat-charcoal">
            {userName ? `Hi, ${userName.split(' ')[0]}! 👋` : 'Welcome! 👋'}
          </h1>
          <p className="text-gray-600 mt-1">Discover offbeat places in North Bengal</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search destinations, homestays..."
            className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-offbeat-lime focus:border-transparent"
          />
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </header>

      {/* Featured Section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-xl flex items-center">
            <TrendingUp size={18} className="text-offbeat-lime mr-2" />
            Featured Destinations
          </h2>
          <a href="/explore" className="text-sm font-medium text-offbeat-lime hover:underline">
            See all
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredDestinations.slice(0, 2).map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </section>

      {/* Offbeat Places Section */}
      <section className="mb-10">
        <h2 className="font-semibold text-xl mb-4 flex items-center">
          <MapPin size={18} className="text-offbeat-lime mr-2" />
          Offbeat Gems in North Bengal
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {featuredDestinations.slice(2).map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
