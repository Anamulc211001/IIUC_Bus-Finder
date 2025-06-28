import React from 'react';
import { Search, Filter, Bus, Users, Calendar, MapPin, Route } from 'lucide-react';
import { Direction, Gender, BusType, ScheduleType, RouteFilter } from '../types/BusSchedule';

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  direction: Direction;
  onDirectionChange: (direction: Direction) => void;
  gender: Gender;
  onGenderChange: (gender: Gender) => void;
  busType: BusType;
  onBusTypeChange: (busType: BusType) => void;
  scheduleType: ScheduleType;
  onScheduleTypeChange: (scheduleType: ScheduleType) => void;
  routeFilter: RouteFilter;
  onRouteFilterChange: (routeFilter: RouteFilter) => void;
  routeAreas: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  onSearchChange,
  direction,
  onDirectionChange,
  gender,
  onGenderChange,
  busType,
  onBusTypeChange,
  scheduleType,
  onScheduleTypeChange,
  routeFilter,
  onRouteFilterChange,
  routeAreas,
}) => {
  const clearAllFilters = () => {
    onSearchChange('');
    onDirectionChange('All');
    onGenderChange('All');
    onBusTypeChange('All');
    onScheduleTypeChange('All');
    onRouteFilterChange('All');
  };

  const hasActiveFilters = searchTerm !== '' || direction !== 'All' || gender !== 'All' || 
                          busType !== 'All' || scheduleType !== 'All' || routeFilter !== 'All';

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-8 mb-12 -mt-16 relative z-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-3">
            <Search className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Smart Search</h2>
            <p className="text-gray-600">Find your perfect bus schedule</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>Real-time schedules</span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors border border-red-200"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
      
      
      {/* Search Input */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Search by time, area, or route
        </label>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="e.g., 7:00 AM, Baroyarhat, Mirshorai..."
            className="w-full pl-12 pr-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 text-lg"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Route/Area Filter - NEW */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Route/Area
          </label>
          <div className="relative group">
            <Route className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <select
              value={routeFilter}
              onChange={(e) => onRouteFilterChange(e.target.value as RouteFilter)}
              className="w-full pl-12 pr-10 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 appearance-none cursor-pointer hover:bg-gray-100"
            >
              <option value="All">All Areas</option>
              {routeAreas.map((area) => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Schedule Type Filter */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Schedule Type
          </label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <select
              value={scheduleType}
              onChange={(e) => onScheduleTypeChange(e.target.value as ScheduleType)}
              className="w-full pl-12 pr-10 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 appearance-none cursor-pointer hover:bg-gray-100"
            >
              <option value="All">All Schedules</option>
              <option value="Regular">Regular (Sat-Wed)</option>
              <option value="Friday">Friday Only</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Direction Filter */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Direction
          </label>
          <div className="relative group">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <select
              value={direction}
              onChange={(e) => onDirectionChange(e.target.value as Direction)}
              className="w-full pl-12 pr-10 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 appearance-none cursor-pointer hover:bg-gray-100"
            >
              <option value="All">All Directions</option>
              <option value="CityToIIUC">City → IIUC</option>
              <option value="IIUCToCity">IIUC → City</option>
              <option value="ToUniversity">To University</option>
              <option value="FromUniversity">From University</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Gender Filter */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Gender
          </label>
          <div className="relative group">
            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <select
              value={gender}
              onChange={(e) => onGenderChange(e.target.value as Gender)}
              className="w-full pl-12 pr-10 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 appearance-none cursor-pointer hover:bg-gray-100"
            >
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bus Type Filter (conditionally shown) */}
        <div className={`space-y-3 ${scheduleType !== 'Friday' ? 'opacity-50' : ''}`}>
          <label className="block text-sm font-semibold text-gray-700">
            Bus Type
          </label>
          <div className="relative group">
            <Bus className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <select
              value={busType}
              onChange={(e) => onBusTypeChange(e.target.value as BusType)}
              disabled={scheduleType !== 'Friday'}
              className="w-full pl-12 pr-10 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 appearance-none cursor-pointer hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100"
            >
              <option value="All">All Bus Types</option>
              <option value="IIUC Bus">IIUC Bus</option>
              <option value="IIUC A&H B">IIUC A&H B</option>
              <option value="AC Bus">AC Bus</option>
              <option value="Non-AC Bus">Non-AC Bus</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {scheduleType !== 'Friday' && (
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="text-sm text-blue-700">
              <span className="font-semibold">Note:</span> Bus Type filter is only available for Friday schedules.
            </p>
          </div>
        )}
        
        {routeFilter !== 'All' && (
          <div className="p-4 bg-green-50 rounded-2xl border border-green-200">
            <p className="text-sm text-green-700">
              <span className="font-semibold">Route Filter Active:</span> Showing schedules for "{routeFilter}" area.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;