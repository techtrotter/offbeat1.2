
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Calendar, Coffee, Wifi, Check } from 'lucide-react';

interface HomestayCardProps {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  ratingCount: number;
  availableFrom?: string;
  availableTo?: string;
  amenities?: string[];
}

const HomestayCard: React.FC<HomestayCardProps> = ({
  id,
  name,
  location,
  image,
  price,
  rating,
  ratingCount,
  availableFrom,
  availableTo,
  amenities = [],
}) => {
  const navigate = useNavigate();

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'breakfast':
        return <Coffee size={12} className="text-offbeat-lime" />;
      case 'wifi':
        return <Wifi size={12} className="text-offbeat-lime" />;
      default:
        return <Check size={12} className="text-offbeat-lime" />;
    }
  };

  return (
    <div 
      className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
      onClick={() => navigate(`/homestay/${id}`)}
    >
      <div className="aspect-[3/2] w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-offbeat-charcoal">{name}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
            <span className="font-medium">{rating.toFixed(1)}</span>
            <span className="text-gray-500 text-sm ml-1">({ratingCount})</span>
          </div>
        </div>
        
        <div className="flex items-center mt-1 text-sm text-gray-600">
          <MapPin size={14} className="text-offbeat-lime mr-1" />
          <span className="truncate">{location}</span>
        </div>
        
        {(availableFrom && availableTo) && (
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <Calendar size={14} className="text-offbeat-lime mr-1" />
            <span>Available: {availableFrom} - {availableTo}</span>
          </div>
        )}
        
        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {amenities.slice(0, 3).map((amenity, index) => (
              <div key={index} className="flex items-center bg-gray-100 rounded-full px-2 py-0.5 text-xs">
                {getAmenityIcon(amenity)}
                <span className="ml-1">{amenity}</span>
              </div>
            ))}
            {amenities.length > 3 && (
              <div className="flex items-center bg-gray-100 rounded-full px-2 py-0.5 text-xs">
                <span>+{amenities.length - 3} more</span>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-3 font-semibold text-lg">
          ₹{price}<span className="text-sm font-normal text-gray-600">/night</span>
        </div>
      </div>
    </div>
  );
};

export default HomestayCard;
