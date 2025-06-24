import React from 'react';
import { Bus, GraduationCap, Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
<header
  className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden h-[700px]"
  style={{ backgroundImage: "url('/bg-iiuc1.png')" }} // 🔁 Change this to your actual image path
>
  {/* Optional: Overlay for readability */}
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-0"></div>



  {/* Background Pattern on top of image (optional) */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10 z-0"></div>

  <div className="relative container mx-auto px-6 py-12 z-10">
    <div className="text-center max-w-4xl mx-auto">
      {/* Logo Section */}
<div className="flex items-center justify-center space-x-4 mb-6">
  <div className="relative">
    <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-30"></div>
    <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
      {/* IIUC Logo Only */}
      <img 
        src="/iiuc.png" 
        alt="iiuc"
        className="h-10 w-10 object-contain z-10"
      />
    </div>
  </div>

  <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

  <div className="relative">
    <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-30"></div>
    <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
      <Bus className="h-10 w-10 text-emerald-300" />
    </div>
  </div>
</div>



          


{/* Title Section */}
<div className="space-y-4">
  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent leading-tight animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-white w-fit mx-auto">
    IIUC Bus Schedule 2025
  </h1>

  <div className="flex items-center justify-center space-x-3 text-blue-200">
    <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1 max-w-20"></div>
    <p className="text-lg font-medium">International Islamic University Chittagong</p>
    <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1 max-w-20"></div>
  </div>

  {/* Updated marquee text line */}
  <div className="overflow-hidden w-full">
    <p className="text-blue-100/80 text-lg whitespace-nowrap animate-marquee font-medium">
      Find your perfect bus schedule with our comprehensive search system. Filter by time, location, and preferences for a seamless commute experience.
    </p>
  </div>
</div>






          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Clock className="h-6 w-6 text-blue-300" />
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <p className="text-blue-200 text-sm">Daily Schedules</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Bus className="h-6 w-6 text-emerald-300" />
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <p className="text-blue-200 text-sm">Routes Available</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <GraduationCap className="h-6 w-6 text-purple-300" />
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <p className="text-blue-200 text-sm">Service Support</p>
            </div>
          </div>
        </div>
      </div>
      

      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-8">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgb(248 250 252)" />
        </svg>
      </div>
    </header>
  );
};

export default Header;