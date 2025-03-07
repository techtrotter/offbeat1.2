import React, { useState } from 'react';
import { Search, Calendar, ChevronDown, Filter, MapPin, Coffee, Wifi, Car, Plus } from 'lucide-react';
import HomestayCard from '@/components/ui/HomestayCard';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    availableTo: "Aug 20",
    amenities: ["Breakfast", "Wifi", "Mountain View", "Parking"]
  },
  {
    id: 2,
    name: "Hill Garden Cottage",
    location: "Latpanchar, Darjeeling",
    image: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=2787&auto=format&fit=crop",
    price: 2800,
    rating: 4.7,
    ratingCount: 45,
    amenities: ["Breakfast", "Trekking", "Garden"]
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
    availableTo: "Sep 5",
    amenities: ["Breakfast", "Wifi", "Tea Garden Tour"]
  },
  {
    id: 4,
    name: "Riverside Cottage",
    location: "Sittong, Kurseong",
    image: "https://images.unsplash.com/photo-1622050756792-5b1180bbb458?q=80&w=2787&auto=format&fit=crop",
    price: 1800,
    rating: 4.5,
    ratingCount: 17,
    amenities: ["River View", "Barbeque", "Fishing"]
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
    availableTo: "Aug 30",
    amenities: ["Forest View", "Bonfire", "Trekking"]
  },
  {
    id: 6,
    name: "Valley View Farmstay",
    location: "Chatakpur, Darjeeling",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2670&auto=format&fit=crop",
    price: 2700,
    rating: 4.9,
    ratingCount: 31,
    amenities: ["Farm Activities", "Valley View", "Organic Food"]
  },
  {
    id: 7,
    name: "Heritage Himalayan Lodge",
    location: "Rishap, Kalimpong",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop",
    price: 3100,
    rating: 4.8,
    ratingCount: 27,
    availableFrom: "Aug 20",
    availableTo: "Sep 10",
    amenities: ["Breakfast", "Himalayan View", "Cultural Activities"]
  },
  {
    id: 8,
    name: "Cloud Nine Eco Lodge",
    location: "Icchey Gaon, Darjeeling",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680&auto=format&fit=crop",
    price: 2400,
    rating: 4.7,
    ratingCount: 33,
    amenities: ["Eco-friendly", "Sunrise View", "Organic Meals"]
  },
  {
    id: 9,
    name: "Orange Orchard Homestay",
    location: "Bijanbari, Darjeeling",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=2670&auto=format&fit=crop",
    price: 1950,
    rating: 4.5,
    ratingCount: 19,
    availableFrom: "Sep 1",
    availableTo: "Sep 30",
    amenities: ["Orchard Tour", "River Nearby", "Breakfast"]
  },
  {
    id: 10,
    name: "Misty Mountain Retreat",
    location: "Pedong, Kalimpong",
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2787&auto=format&fit=crop",
    price: 3000,
    rating: 4.9,
    ratingCount: 41,
    amenities: ["Mist View", "Fireplace", "Mountain Biking"]
  }
];

const locations = [
  "All Locations",
  "Kalimpong",
  "Darjeeling",
  "Kurseong"
];

const amenityOptions = [
  { icon: Coffee, label: "Breakfast" },
  { icon: Wifi, label: "Wifi" },
  { icon: MapPin, label: "Mountain View" },
  { icon: Car, label: "Parking" }
];

const StaysScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([1500, 3500]);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  
  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const filteredHomestays = homestays.filter(homestay => {
    const matchesSearch = 
      homestay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      homestay.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = 
      selectedLocation === "All Locations" || 
      homestay.location.includes(selectedLocation);
    
    const matchesPrice = 
      homestay.price >= priceRange[0] && homestay.price <= priceRange[1];
    
    const matchesAmenities = 
      selectedAmenities.length === 0 || 
      selectedAmenities.every(amenity => 
        homestay.amenities?.includes(amenity)
      );
    
    return matchesSearch && matchesLocation && matchesPrice && matchesAmenities;
  });

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
        
        {/* Date Picker */}
        <div className="flex space-x-2 mb-4">
          {/* Check-in Date */}
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal px-4 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50",
                  !checkInDate && "text-gray-500"
                )}
              >
                <Calendar className="mr-2 h-4 w-4 text-offbeat-lime" />
                {checkInDate ? format(checkInDate, "PPP") : <span>Check-in date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>

          {/* Check-out Date */}
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal px-4 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50",
                  !checkOutDate && "text-gray-500"
                )}
              >
                <Calendar className="mr-2 h-4 w-4 text-offbeat-lime" />
                {checkOutDate ? format(checkOutDate, "PPP") : <span>Check-out date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                disabled={(date) => checkInDate ? date < checkInDate : false}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Advanced Filter Button */}
        <button 
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all duration-300 mb-4"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <div className="flex items-center">
            <Filter size={18} className="text-offbeat-lime mr-2" />
            <span className="text-gray-600">More filters</span>
          </div>
          <ChevronDown size={18} className={`text-gray-400 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Advanced Filters Panel */}
        {isFilterOpen && (
          <div className="bg-white rounded-xl p-4 mb-4 shadow-md">
            {/* Location Filter */}
            <div className="mb-4">
              <h3 className="font-medium text-sm mb-2">Location</h3>
              <div className="flex flex-wrap gap-2">
                {locations.map(location => (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedLocation === location
                        ? 'bg-offbeat-lime text-offbeat-charcoal'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-4">
              <h3 className="font-medium text-sm mb-2">Price Range (₹)</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="1500"
                max="3500"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-offbeat-lime"
              />
            </div>
            
            {/* Amenities */}
            <div>
              <h3 className="font-medium text-sm mb-2">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {amenityOptions.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => toggleAmenity(label)}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      selectedAmenities.includes(label)
                        ? 'bg-offbeat-lime text-offbeat-charcoal'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Icon size={14} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Quick Filter Options */}
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
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm font-medium">
            Mountain View
          </button>
        </div>
      </header>

      {/* Selected Dates Summary */}
      {(checkInDate || checkOutDate) && (
        <div className="bg-gray-50 p-3 rounded-lg mb-4 flex items-center">
          <Calendar className="text-offbeat-lime mr-2" size={18} />
          <div>
            <span className="text-sm font-medium">
              {checkInDate ? format(checkInDate, "PPP") : "No check-in date"} 
              {" - "} 
              {checkOutDate ? format(checkOutDate, "PPP") : "No check-out date"}
            </span>
          </div>
        </div>
      )}

      {/* Homestays Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredHomestays.length > 0 ? (
          filteredHomestays.map((homestay) => (
            <HomestayCard key={homestay.id} {...homestay} />
          ))
        ) : (
          <div className="col-span-2 py-10 text-center">
            <p className="text-gray-500">No homestays found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaysScreen;
