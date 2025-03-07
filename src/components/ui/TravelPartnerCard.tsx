
import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

interface TravelPartnerCardProps {
  id: number;
  name: string;
  age: number;
  gender: string;
  location: string;
  destination: string;
  travelDates: string;
  bio: string;
  avatarUrl: string;
  interests: string[];
  onConnect: (id: number) => void;
}

const TravelPartnerCard: React.FC<TravelPartnerCardProps> = ({
  id,
  name,
  age,
  gender,
  location,
  destination,
  travelDates,
  bio,
  avatarUrl,
  interests,
  onConnect,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="flex p-4 pb-1">
        <div className="mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-offbeat-lime">
            <img 
              src={avatarUrl} 
              alt={name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{name}, {age}</h3>
            <span className="text-sm text-gray-500">{gender}</span>
          </div>
          
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <MapPin size={14} className="text-offbeat-lime mr-1" />
            <span>From {location}</span>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-2">
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <MapPin size={14} className="text-offbeat-lime mr-1" />
          <span>Traveling to <span className="font-medium">{destination}</span></span>
        </div>
        
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <Calendar size={14} className="text-offbeat-lime mr-1" />
          <span>{travelDates}</span>
        </div>
        
        <p className="text-sm text-gray-700 line-clamp-2 mb-2">{bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {interests.map((interest, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
        
        <button 
          onClick={() => onConnect(id)}
          className="w-full bg-offbeat-lime text-offbeat-charcoal font-medium py-2 rounded-lg hover:bg-offbeat-lime-dark transition-all duration-300"
        >
          <Users className="inline-block mr-1 w-4 h-4" /> Connect
        </button>
      </div>
    </div>
  );
};

export default TravelPartnerCard;
