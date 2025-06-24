import React from 'react';
import { Clock, MapPin, Route, ArrowRight, Users, Bus, Calendar, Star } from 'lucide-react';
import { BusSchedule } from '../types/BusSchedule';

interface BusCardProps {
  schedule: BusSchedule;
}

const BusCard: React.FC<BusCardProps> = ({ schedule }) => {
  const getDirectionColor = (direction: string) => {
    switch (direction) {
      case 'CityToIIUC':
        return 'bg-gradient-to-r from-emerald-500 to-green-600 text-white';
      case 'IIUCToCity':
        return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white';
      case 'ToUniversity':
        return 'bg-gradient-to-r from-purple-500 to-violet-600 text-white';
      case 'FromUniversity':
        return 'bg-gradient-to-r from-orange-500 to-red-600 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-600 text-white';
    }
  };

  const getGenderColor = (gender?: string) => {
    if (!gender) return '';
    return gender === 'Male' 
      ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300' 
      : 'bg-gradient-to-r from-pink-100 to-rose-200 text-pink-800 border border-pink-300';
  };

  const getBusTypeColor = (busType?: string) => {
    if (!busType) return '';
    switch (busType) {
      case 'AC Bus':
        return 'bg-gradient-to-r from-purple-100 to-violet-200 text-purple-800 border border-purple-300';
      case 'IIUC A&H B':
        return 'bg-gradient-to-r from-orange-100 to-amber-200 text-orange-800 border border-orange-300';
      case 'Non-AC Bus':
        return 'bg-gradient-to-r from-gray-100 to-slate-200 text-gray-800 border border-gray-300';
      default:
        return 'bg-gradient-to-r from-indigo-100 to-blue-200 text-indigo-800 border border-indigo-300';
    }
  };

  const getRemarksColor = (remarks?: string) => {
    if (!remarks) return 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200';
    if (remarks.toLowerCase().includes('student')) {
      return 'bg-gradient-to-r from-green-50 to-emerald-100 text-green-700 border border-green-200';
    } else if (remarks.toLowerCase().includes('teacher')) {
      return 'bg-gradient-to-r from-blue-50 to-indigo-100 text-blue-700 border border-blue-200';
    } else if (remarks.toLowerCase().includes('staff') || remarks.toLowerCase().includes('officer')) {
      return 'bg-gradient-to-r from-yellow-50 to-amber-100 text-yellow-700 border border-yellow-200';
    }
    return 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200';
  };

  const getScheduleTypeColor = (scheduleType: string) => {
    return scheduleType === 'Friday' 
      ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white' 
      : 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white';
  };

  const formatRoute = (route: string) => {
    if (route.length > 60) {
      return route.substring(0, 60) + '...';
    }
    return route;
  };

  const formatDirection = (direction: string) => {
    switch (direction) {
      case 'CityToIIUC':
        return 'City → IIUC';
      case 'IIUCToCity':
        return 'IIUC → City';
      case 'ToUniversity':
        return 'To University';
      case 'FromUniversity':
        return 'From University';
      default:
        return direction;
    }
  };

  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-3">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-3xl font-bold text-gray-900">{schedule.time}</span>
              <div className="flex items-center space-x-2 mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">Live Schedule</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className={`px-4 py-2 rounded-full text-xs font-bold ${getScheduleTypeColor(schedule.scheduleType)} shadow-lg`}>
              {schedule.scheduleType === 'Friday' ? '🕌 Friday' : '📅 Regular'}
            </span>
            <span className={`px-4 py-2 rounded-full text-xs font-bold ${getDirectionColor(schedule.direction)} shadow-lg`}>
              {formatDirection(schedule.direction)}
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-6">
        {/* Route Information */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-xl p-2 mt-1">
              <MapPin className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Starting Point</span>
              <p className="text-xl font-bold text-gray-900 mt-1">{schedule.startingPoint}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <ArrowRight className="h-6 w-6 text-gray-400 mx-4" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-xl p-2 mt-1">
              <Route className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Route Details</span>
              <p className="text-gray-700 leading-relaxed mt-1">{formatRoute(schedule.route)}</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-4 border border-indigo-100">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-indigo-500 rounded-lg p-1">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-indigo-700">Destination</span>
            </div>
            <p className="font-bold text-indigo-900 text-lg">{schedule.endPoint}</p>
          </div>
        </div>

        {/* Tags and Additional Info */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {schedule.gender && (
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getGenderColor(schedule.gender)} shadow-sm`}>
                👤 {schedule.gender}
              </span>
            )}
            {schedule.busType && (
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getBusTypeColor(schedule.busType)} shadow-sm`}>
                🚌 {schedule.busType}
              </span>
            )}
          </div>
          
          {(schedule.remarks || schedule.description) && (
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-4 border border-amber-200">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-700">Special Notes</span>
              </div>
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getRemarksColor(schedule.remarks || schedule.description)} shadow-sm`}>
                {schedule.remarks || schedule.description}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center space-x-2">
            <Bus className="h-4 w-4" />
            <span>Live tracking available</span>
          </span>
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            ✓ Active
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusCard;