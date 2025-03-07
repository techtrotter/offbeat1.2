
import React, { useState } from 'react';
import { Search, Calendar, ChevronDown } from 'lucide-react';
import HomestayCard from '@/components/ui/HomestayCard';

// Sample data
const homestays = [
  {
    id: 1,
    name: "Mountain View Homestay",
    location: "Lepchakha, Kalimpong",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2787&auto=format&fit=crop",
    price: 2200,
    rating: 4.9,
    ratingCount: 38,
    availableFrom: "Aug 10",
    availableTo: "Aug 20"
  },
  {
    id: 2,
    name: "Hill Garden Cottage",
    location: "Latpanchar, Darjeeling",
    image: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=2787&auto=format&fit=crop",
    price: 2800,
    rating: 4.7,
    ratingCount: 45
  },
  {
    id: 3,
    name: "Tea Garden Retreat",
    location: "Tinchuley, Darjeeling",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop",
    price: 3200,
    rating: 4.8,
    ratingCount: 29,
    availableFrom: "Aug 15",
    availableTo: "Sep 5"
  },
  {
    id: 4,
    name: "Riverside Cottage",
    location: "Sittong, Kurseong",
    image: "https://images.unsplash.com/photo-1622050756792-5b1180bbb458?q=80&w=2787&auto=format&fit=crop",
    price: 1800,
    rating: 4.5,
    ratingCount: 17
  },
  {
    id: 5,
    name: "Pine Forest Cabin",
    location: "Lava, Kalimpong",
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2669&auto=format&fit=crop",
    price: 2500,
    rating: 4.6,
    ratingCount: 23,
    availableFrom: "Aug 1",
    availableTo: "Aug 30"
  },
  {
    id: 6,
    name: "Valley View Farmstay",
    location: "Chatakpur, Darjeeling",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2670&auto=format&fit=crop",
    price: 2700,
    rating: 4.9,
    ratingCount: 31
  }
];

const StaysScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  
  const filteredHomestays = homestays.filter(homestay => 
    homestay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    homestay.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-6">
        <h1 className="heading-md text-offbeat-charcoal mb-4">Find Unique Homestays</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search homestays..."
            className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-offbeat-lime focus:border-transparent"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        {/* Date Picker Toggle */}
        <button 
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all duration-300 mb-4"
          onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
        >
          <div className="flex items-center">
            <Calendar size={18} className="text-offbeat-lime mr-2" />
            <span className="text-gray-600">Select dates</span>
          </div>
          <ChevronDown size={18} className="text-gray-400" />
        </button>
        
        {/* Filter Options */}
        <div className="flex overflow-x-auto py-2 hide-scrollbar gap-2">
          <button className="px-4 py-2 bg-offbeat-lime text-offbeat-charcoal rounded-full whitespace-nowrap text-sm font-medium">
            Price: Low to High
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm font-medium">
            Top Rated
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm font-medium">
            Available Now
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm font-medium">
            Breakfast Included
          </button>
        </div>
      </header>

      {/* Homestays Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredHomestays.length > 0 ? (
          filteredHomestays.map((homestay) => (
            <HomestayCard key={homestay.id} {...homestay} />
          ))
        ) : (
          <div className="col-span-2 py-10 text-center">
            <p className="text-gray-500">No homestays found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaysScreen;
