
import React, { useState } from 'react';
import { Search, Filter, Users, Plus } from 'lucide-react';
import TravelPartnerCard from '@/components/ui/TravelPartnerCard';
import { useToast } from '@/hooks/use-toast';

// Sample data
const travelPartners = [
  {
    id: 1,
    name: "Rahul Singh",
    age: 27,
    gender: "Male",
    location: "Delhi",
    destination: "Darjeeling",
    travelDates: "Aug 15 - Aug 22",
    bio: "Adventure enthusiast looking to explore hidden trails in Darjeeling. Love photography and local cuisine.",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop",
    interests: ["Hiking", "Photography", "Food"]
  },
  {
    id: 2,
    name: "Ananya Sharma",
    age: 25,
    gender: "Female",
    location: "Mumbai",
    destination: "Kalimpong",
    travelDates: "Sep 5 - Sep 12",
    bio: "First time solo traveler seeking company for exploring Kalimpong's culture and natural beauty.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
    interests: ["Culture", "Nature", "Reading"]
  },
  {
    id: 3,
    name: "Vikram Mehta",
    age: 31,
    gender: "Male",
    location: "Bangalore",
    destination: "Latpanchar",
    travelDates: "Aug 18 - Aug 25",
    bio: "Bird watching enthusiast planning to explore Latpanchar's avian diversity. Looking for like-minded travelers.",
    avatarUrl: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2670&auto=format&fit=crop",
    interests: ["Birdwatching", "Trekking", "Photography"]
  },
  {
    id: 4,
    name: "Priya Patel",
    age: 29,
    gender: "Female",
    location: "Ahmedabad",
    destination: "Sittong",
    travelDates: "Sep 10 - Sep 17",
    bio: "Travel blogger exploring offbeat places in North Bengal. Love meeting locals and trying regional cuisine.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2676&auto=format&fit=crop",
    interests: ["Blogging", "Food", "Local Culture"]
  }
];

const PartnersScreen: React.FC = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPartners = travelPartners.filter(partner => 
    partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.interests.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleConnect = (id: number) => {
    const partner = travelPartners.find(p => p.id === id);
    toast({
      title: "Connection Request Sent",
      description: `You've sent a connection request to ${partner?.name}`,
      duration: 3000,
    });
  };

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="heading-md text-offbeat-charcoal">Find Travel Partners</h1>
          <button className="p-2 bg-offbeat-lime rounded-full">
            <Plus size={20} className="text-offbeat-charcoal" />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, destination, interests..."
            className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-offbeat-lime focus:border-transparent"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full">
            <Filter size={16} className="text-gray-600" />
          </button>
        </div>
        
        {/* Filter Options */}
        <div className="flex overflow-x-auto py-2 hide-scrollbar gap-2">
          <button className="px-4 py-2 bg-offbeat-lime text-offbeat-charcoal rounded-full whitespace-nowrap text-sm font-medium flex items-center">
            <Users size={14} className="mr-1" /> All Partners
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm font-medium">
            Darjeeling
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm font-medium">
            Kalimpong
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm font-medium">
            This Month
          </button>
        </div>
      </header>

      {/* Travel Partners Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredPartners.length > 0 ? (
          filteredPartners.map((partner) => (
            <TravelPartnerCard 
              key={partner.id} 
              {...partner} 
              onConnect={handleConnect}
            />
          ))
        ) : (
          <div className="py-10 text-center">
            <p className="text-gray-500">No travel partners found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnersScreen;
