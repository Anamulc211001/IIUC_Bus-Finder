import React from 'react';
import { Bus, GraduationCap, Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
<header
  className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden h-[500px] sm:h-[600px] lg:h-[700px] pt-16 sm:pt-20"
  style={{ backgroundImage: "url('/bg-iiuc3.png')" }}
>
  {/* Overlay for readability */}
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-0"></div>

  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10 z-0"></div>

  <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 z-10">
    <div className="text-center max-w-4xl mx-auto">

      {/* Animated Bus Icon - Hidden on mobile */}
      <div className="hidden lg:block absolute top-20 right-10 opacity-10">
        <div className="animate-bus-drive">
          <Bus className="h-24 w-24 xl:h-32 xl:w-32 text-white transform" />
        </div>
      </div>  
      
      {/* Logo Section */}
<div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6 animate-fade-slide-up">
  <div className="relative">
    <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-30"></div>
    <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4 border border-white/20">
      <img 
        src="/iiuc.png" 
        alt="iiuc"
        className="h-8 w-8 sm:h-10 sm:w-10 object-contain z-10"
      />
    </div>
  </div>

  <div className="h-8 sm:h-12 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

  <div className="relative">
    <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-30"></div>
    <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4 border border-white/20">
      <Bus className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-300" />
    </div>
  </div>
</div>

{/* Title Section - Responsive Typography */}
<div className="space-y-3 sm:space-y-4">
  
  {/* Main Title - Responsive Text Sizes */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent leading-tight animate-magnetic-pull px-2">
    IIUC Bus Schedule 2025
  </h1>

  {/* Subtitle - Responsive */}
  <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-blue-200 animate-fade-slide-up px-4" style={{ animationDelay: '0.3s' }}>
    <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1 max-w-12 sm:max-w-20"></div>
    <p className="text-sm sm:text-base lg:text-lg font-medium text-center">International Islamic University Chittagong</p>
    <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1 max-w-12 sm:max-w-20"></div>
  </div>

  {/* Description - Mobile Optimized */}
  <div className="overflow-hidden w-full animate-fade-slide-up px-4" style={{ animationDelay: '0.6s' }}>
    <p className="text-blue-100/80 text-sm sm:text-base lg:text-lg whitespace-nowrap animate-marquee font-medium">
      Find your perfect bus schedule with our comprehensive search system. Filter by time, location, and preferences for a seamless commute experience.
    </p>
  </div>
</div>

          {/* Quick Stats - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 px-4">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 animate-fade-slide-up" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />
                <span className="text-xl sm:text-2xl font-bold text-white">50+</span>
              </div>
              <p className="text-blue-200 text-xs sm:text-sm">Daily Schedules</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 animate-fade-slide-up" style={{ animationDelay: '1.1s' }}>
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
                <Bus className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-300" />
                <span className="text-xl sm:text-2xl font-bold text-white">15+</span>
              </div>
              <p className="text-blue-200 text-xs sm:text-sm">Routes Available</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 animate-fade-slide-up sm:col-span-1" style={{ animationDelay: '1.3s' }}>
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-purple-300" />
                <span className="text-xl sm:text-2xl font-bold text-white">24/7</span>
              </div>
              <p className="text-blue-200 text-xs sm:text-sm">Service Support</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-6 sm:h-8">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgb(248 250 252)" />
        </svg>
      </div>
    </header>
  );
};

export default Header;