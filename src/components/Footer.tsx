import React from 'react';
import { Phone, Mail, MapPin, Heart, ExternalLink, Clock, Bus, Users } from 'lucide-react';

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
          {/* IIUC Transport Cell */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                IIUC Transport Cell
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Providing reliable and safe transportation services for IIUC students, faculty, and staff.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="bg-blue-500/20 rounded-xl p-3 group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+880-31-2510500</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="bg-emerald-500/20 rounded-xl p-3 group-hover:bg-emerald-500/30 transition-colors">
                  <Mail className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">transport@iiuc.ac.bd</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="bg-purple-500/20 rounded-xl p-3 group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white font-semibold">Kumira, Chittagong-4318</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'IIUC Website', href: 'https://iiuc.ac.bd', external: true },
                { name: 'IIUC Facebook', href: 'https://www.facebook.com/iiuc.ac.bd' },
                { name: 'Transport Division', href: 'https://www.iiuc.ac.bd/divisions/transport' },
                { name: 'IIUC Community', href: 'https://www.facebook.com/groups/186698172643552' },
                { name: 'Schedule Updates', href: 'https://www.iiuc.ac.bd/home/transport' },
                { name: 'Route Information', href: 'https://www.iiuc.ac.bd/home/transport' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    {link.external && <ExternalLink className="h-4 w-4" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Hours */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Service Hours
            </h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="font-semibold text-white">Regular Days</span>
                </div>
                <p className="text-gray-300 text-sm">Saturday - Wednesday</p>
                <p className="text-white font-semibold">6:40 AM - 4:35 PM</p>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold text-white">Friday</span>
                </div>
                <p className="text-gray-300 text-sm">Special Schedule</p>
                <p className="text-white font-semibold">7:30 AM - 6:30 PM</p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Service Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-4 border border-blue-500/30">
                <Bus className="h-8 w-8 text-blue-400 mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-blue-200">Daily Routes</div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl p-4 border border-emerald-500/30">
                <Users className="h-8 w-8 text-emerald-400 mb-2" />
                <div className="text-2xl font-bold text-white">2K+</div>
                <div className="text-xs text-emerald-200">Daily Users</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl p-4 border border-purple-500/30">
                <MapPin className="h-8 w-8 text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-purple-200">Destinations</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-4 border border-orange-500/30">
                <Clock className="h-8 w-8 text-orange-400 mb-2" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-orange-200">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 Md Anamul Haque. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
<div className="flex flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl px-6 py-3 border border-red-500/30">
  <span className="text-gray-300">This Project</span>
  <Heart className="h-5 w-5 text-red-400 animate-pulse" />

  <span className="text-white font-semibold">Developed by Md Anamul Haque |</span>

  {/* Email */}
  <a
    href="mailto:anamulshakib6450@gmail.com"
    className="text-blue-200 hover:text-blue-400 transition underline"
  >
    anamulshakib6450@gmail.com
  </a>

  {/* Phone */}
  <a
    href="tel:+8801680478706"
    className="text-blue-200 hover:text-green-400 transition underline"
  >
    +880 1680-478706
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Anamulc211001"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-200 hover:text-gray-400 transition underline"
  >
    GitHub
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/md-anamul-haque-shakib/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-200 hover:text-blue-500 transition underline"
  >
    LinkedIn
  </a>

  {/* Facebook */}
  <a
    href="https://www.behance.net/mdanamulhaque6"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-200 hover:text-pink-400 transition underline"
  >
    Behance
  </a>

  <span className="text-white font-semibold">| IIUC</span>
</div>




          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;