import React from 'react';
import { Phone, Mail, MapPin, Heart, ExternalLink, Clock, Bus, Users, Globe, MessageCircle, Navigation } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-8 transform rotate-180">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgb(248 250 252)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* IIUC Transport Cell - Simplified */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                IIUC Transport
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Safe and reliable transportation for IIUC community.
              </p>
            </div>
            
            {/* Simplified Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+880-31-2510500"
                className="flex items-center space-x-3 group hover:text-blue-300 transition-colors"
              >
                <div className="bg-blue-500/20 rounded-lg p-2 group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-sm font-medium">+880-31-2510500</span>
              </a>
              
              <a 
                href="mailto:transport@iiuc.ac.bd"
                className="flex items-center space-x-3 group hover:text-emerald-300 transition-colors"
              >
                <div className="bg-emerald-500/20 rounded-lg p-2 group-hover:bg-emerald-500/30 transition-colors">
                  <Mail className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-sm font-medium">transport@iiuc.ac.bd</span>
              </a>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="bg-purple-500/20 rounded-lg p-2">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-sm">Kumira, Chittagong</span>
              </div>
            </div>
          </div>

          {/* Quick Actions - More User Focused */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-3 w-full text-left text-gray-300 hover:text-white transition-colors group"
              >
                <Navigation className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Back to Search</span>
              </button>
              
              <a 
                href="https://iiuc.ac.bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Globe className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">IIUC Website</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
              
              <a 
                href="https://www.facebook.com/iiuc.ac.bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <MessageCircle className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">IIUC Facebook</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
              
              <a 
                href="https://www.facebook.com/groups/186698172643552" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Users className="h-4 w-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">IIUC Community</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Service Hours - Cleaner Layout */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Service Hours
            </h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="font-semibold text-white text-sm">Regular Days</span>
                </div>
                <p className="text-gray-300 text-xs mb-1">Saturday - Wednesday</p>
                <p className="text-white font-semibold text-sm">6:40 AM - 4:35 PM</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span className="font-semibold text-white text-sm">Friday</span>
                </div>
                <p className="text-gray-300 text-xs mb-1">Special Schedule</p>
                <p className="text-white font-semibold text-sm">7:30 AM - 6:30 PM</p>
              </div>
            </div>
          </div>

          {/* Simplified Statistics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Service Stats
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-3 border border-blue-500/30 text-center">
                <Bus className="h-6 w-6 text-blue-400 mb-1 mx-auto" />
                <div className="text-lg font-bold text-white">50+</div>
                <div className="text-xs text-blue-200">Routes</div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl p-3 border border-emerald-500/30 text-center">
                <Users className="h-6 w-6 text-emerald-400 mb-1 mx-auto" />
                <div className="text-lg font-bold text-white">2K+</div>
                <div className="text-xs text-emerald-200">Users</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl p-3 border border-purple-500/30 text-center">
                <MapPin className="h-6 w-6 text-purple-400 mb-1 mx-auto" />
                <div className="text-lg font-bold text-white">15+</div>
                <div className="text-xs text-purple-200">Areas</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-3 border border-orange-500/30 text-center">
                <Clock className="h-6 w-6 text-orange-400 mb-1 mx-auto" />
                <div className="text-lg font-bold text-white">24/7</div>
                <div className="text-xs text-orange-200">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 IIUC Bus Finder. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
            {/* Simplified Developer Credit */}
            <div className="flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl px-4 py-2 border border-blue-500/20">
              <span className="text-gray-300 text-sm">Developed by</span>
              <span className="text-white font-semibold text-sm">Md Anamul Haque</span>
              
              <div className="flex items-center space-x-2 ml-2">
                <a
                  href="mailto:anamulshakib6450@gmail.com"
                  className="text-blue-300 hover:text-blue-400 transition text-xs underline"
                >
                  Email
                </a>
                <span className="text-gray-500">•</span>
                <a
                  href="https://github.com/Anamulc211001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition text-xs underline"
                >
                  GitHub
                </a>
                <span className="text-gray-500">•</span>
                <a
                  href="https://www.linkedin.com/in/md-anamul-haque-shakib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition text-xs underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;