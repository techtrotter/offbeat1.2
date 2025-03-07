
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

interface DestinationCardProps {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  ratingCount: number;
  isPopular?: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  location,
  image,
  rating,
  ratingCount,
  isPopular = false,
}) => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
      onClick={() => navigate(`/destination/${id}`)}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          loading="lazy"
        />
      </div>
      
      {isPopular && (
        <div className="absolute top-3 right-3 glass-card py-1 px-3 rounded-full text-xs font-medium">
          Popular
        </div>
      )}
      
      <div className="glass-card absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-semibold text-lg text-offbeat-charcoal truncate">{name}</h3>
        
        <div className="flex items-center mt-1 text-sm">
          <MapPin size={14} className="text-offbeat-lime mr-1" />
          <span className="text-gray-700">{location}</span>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 mr-1 fill-yellow-500" />
            <span className="font-medium">{rating.toFixed(1)}</span>
            <span className="text-gray-500 text-sm ml-1">({ratingCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
