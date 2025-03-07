
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Calendar } from 'lucide-react';

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
}) => {
  const navigate = useNavigate();

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
        
        <div className="mt-3 font-semibold text-lg">
          ₹{price}<span className="text-sm font-normal text-gray-600">/night</span>
        </div>
      </div>
    </div>
  );
};

export default HomestayCard;
