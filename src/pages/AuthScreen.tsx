
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import { Plane } from 'lucide-react';

const AuthScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-offbeat-lime mb-4 animate-floating">
            <Plane size={32} className="text-offbeat-charcoal transform -rotate-45" />
          </div>
          <h1 className="heading-lg text-offbeat-charcoal">Offbeat Travel</h1>
          <p className="text-gray-600 mt-2">Discover hidden gems in North Bengal</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-scale-in">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
