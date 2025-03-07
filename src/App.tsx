
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@/utils/auth";

// Layout
import AppShell from "@/components/layout/AppShell";

// Pages
import HomePage from "@/pages/HomePage";
import ExploreScreen from "@/pages/ExploreScreen";
import StaysScreen from "@/pages/StaysScreen";
import PartnersScreen from "@/pages/PartnersScreen";
import ProfileScreen from "@/pages/ProfileScreen";
import AuthScreen from "@/pages/AuthScreen";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/auth" replace />;
  }
  return <AppShell>{children}</AppShell>;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-offbeat-cream">
        <div className="text-center animate-pulse">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-offbeat-lime mb-4">
            <img 
              src="/lovable-uploads/5cf900b5-3a49-4048-8a67-a7926a2c76ff.png" 
              alt="Offbeat Logo" 
              className="w-10 h-10"
            />
          </div>
          <h1 className="heading-lg text-offbeat-charcoal">Offbeat Travel</h1>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/auth" element={<AuthScreen />} />
            
            {/* Protected Routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/explore" element={
              <ProtectedRoute>
                <ExploreScreen />
              </ProtectedRoute>
            } />
            <Route path="/stays" element={
              <ProtectedRoute>
                <StaysScreen />
              </ProtectedRoute>
            } />
            <Route path="/partners" element={
              <ProtectedRoute>
                <PartnersScreen />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfileScreen />
              </ProtectedRoute>
            } />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
