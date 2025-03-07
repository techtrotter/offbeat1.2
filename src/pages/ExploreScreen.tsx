import React, { useState } from 'react';
import { Search, Filter, MapPin, Mountain, TrendingUp } from 'lucide-react';
import DestinationCard from '@/components/ui/DestinationCard';

// Sample data
const allDestinations = [
  {
    id: 1,
    name: "Lepchakha Hidden Village",
    location: "Kalimpong, North Bengal",
    image: "https://images.unsplash.com/photo-1594388212857-42c064208f49?q=80&w=2135&auto=format&fit=crop",
    rating: 4.8,
    ratingCount: 124,
    isPopular: true,
    category: "village"
  },
  {
    id: 2,
    name: "Latpanchar Viewpoint",
    location: "Darjeeling, North Bengal",
    image: "https://images.unsplash.com/photo-1574950578143-858c6fc58922?q=80&w=2787&auto=format&fit=crop",
    rating: 4.7,
    ratingCount: 98,
    isPopular: true,
    category: "viewpoint"
  },
  {
    id: 3,
    name: "Tinchuley Village",
    location: "Darjeeling, North Bengal",
    image: "https://images.unsplash.com/photo-1583245117731-a5bbc5ff8246?q=80&w=2787&auto=format&fit=crop",
    rating: 4.6,
    ratingCount: 76,
    category: "village"
  },
  {
    id: 4,
    name: "Sittong Valley",
    location: "Kurseong, North Bengal",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9e?q=80&w=2788&auto=format&fit=crop",
    rating: 4.9,
    ratingCount: 45,
    category: "valley"
  },
  {
    id: 5,
    name: "Changey Waterfall",
    location: "Kalimpong, North Bengal",
    image: "https://images.unsplash.com/photo-1598548767211-712f83817567?q=80&w=2784&auto=format&fit=crop",
    rating: 4.5,
    ratingCount: 32,
    category: "waterfall"
  },
  {
    id: 6,
    name: "Jhandi Dara",
    location: "Darjeeling, North Bengal",
    image: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=2670&auto=format&fit=crop",
    rating: 4.4,
    ratingCount: 29,
    category: "viewpoint"
  },
  {
    id: 7,
    name: "Sandakphu Trek",
    location: "Darjeeling, North Bengal",
    image: "https://images.unsplash.com/photo-1464278533981-50e57c2b7d1d?q=80&w=2274&auto=format&fit=crop",
    rating: 4.9,
    ratingCount: 187,
    isPopular: true,
    category: "trek"
  },
  {
    id: 8,
    name: "Phalut Trek",
    location: "Darjeeling, North Bengal",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=2670&auto=format&fit=crop",
    rating: 4.7,
    ratingCount: 112,
    category: "trek"
  },
  {
    id: 9,
    name: "Singalila Ridge Trail",
    location: "Darjeeling, North Bengal",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2676&auto=format&fit=crop",
    rating: 4.8,
    ratingCount: 152,
    isPopular: true,
    category: "trek"
  },
  {
    id: 10,
    name: "Gorumara Trek",
    location: "Jalpaiguri, North Bengal",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2674&auto=format&fit=crop",
    rating: 4.3,
    ratingCount: 67,
    category: "trek"
  },
  {
    id: 11,
    name: "Neora Valley Trek",
    location: "Kalimpong, North Bengal",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
    rating: 4.6,
    ratingCount: 89,
    category: "trek"
  },
  {
    id: 12,
    name: "Mulkharka Trail",
    location: "Darjeeling, North Bengal",
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=2630&auto=format&fit=crop",
    rating: 4.2,
    ratingCount: 45,
    category: "trek"
  }
];

const categories = [
  "All", "Village", "Viewpoint", "Valley", "Waterfall", "Trek", "Lake"
];

const ExploreScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredDestinations = allDestinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || dest.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const trekDestinations = activeCategory === "All" 
    ? filteredDestinations.filter(dest => dest.category === "trek")
    : [];

  const otherDestinations = activeCategory === "All"
    ? filteredDestinations.filter(dest => dest.category !== "trek")
    : filteredDestinations;

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <header className="mb-6">
        <h1 className="heading-md text-offbeat-charcoal mb-4">Explore Offbeat Places</h1>
        
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search destinations..."
            className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-offbeat-lime focus:border-transparent"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full">
            <Filter size={16} className="text-gray-600" />
          </button>
        </div>
        
        <div className="flex overflow-x-auto py-2 hide-scrollbar gap-2 mb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-offbeat-lime text-offbeat-charcoal'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {activeCategory === "All" && trekDestinations.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-xl flex items-center">
              <Mountain size={18} className="text-offbeat-lime mr-2" />
              Trek Destinations
            </h2>
            <button 
              onClick={() => setActiveCategory("Trek")}
              className="text-sm font-medium text-offbeat-lime hover:underline"
            >
              See all
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trekDestinations.slice(0, 4).map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {otherDestinations.length > 0 ? (
          otherDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))
        ) : (
          <div className="col-span-2 py-10 text-center">
            <p className="text-gray-500">No destinations found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreScreen;
