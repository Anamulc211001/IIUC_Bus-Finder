import React from 'react';
import { Bus, AlertCircle, Search, TrendingUp, Filter } from 'lucide-react';
import { BusSchedule } from '../types/BusSchedule';
import BusCard from './BusCard';

interface ResultsSectionProps {
  schedules: BusSchedule[];
  totalSchedules: number;
  isSearching: boolean;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ schedules, totalSchedules, isSearching }) => {
  if (isSearching && schedules.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100">
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <AlertCircle className="h-12 w-12 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No schedules found</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We couldn't find any bus schedules matching your search criteria. 
            Try adjusting your filters or search terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg">
              <Search className="h-5 w-5 mr-2" />
              Clear Filters
            </button>
            <button className="inline-flex items-center px-6 py-3 bg-white text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-200 border-2 border-gray-200">
              <Filter className="h-5 w-5 mr-2" />
              Reset Search
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4">
              <Bus className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {isSearching ? 'Search Results' : 'All Bus Schedules'}
              </h2>
              <p className="text-gray-600 mt-1">
                {isSearching ? 'Filtered results based on your criteria' : 'Complete schedule listing for IIUC transport'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{schedules.length}</div>
              <div className="text-sm text-gray-500">Found</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-400">{totalSchedules}</div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
            {isSearching && (
              <>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="flex items-center space-x-2 text-green-600">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm font-semibold">Active Search</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {schedules.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {schedules.map((schedule) => (
            <BusCard key={schedule.id} schedule={schedule} />
          ))}
        </div>
      ) : !isSearching && (
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100">
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Bus className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No schedules available</h3>
            <p className="text-gray-600 leading-relaxed">
              Bus schedules are currently being updated. Please check back later for the latest information.
            </p>
          </div>
        </div>
      )}

      {/* Load More Button (if needed in future) */}
      {schedules.length > 0 && schedules.length >= 12 && (
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-2xl font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-200 border border-gray-300 shadow-lg">
            <Bus className="h-5 w-5 mr-2" />
            Load More Schedules
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultsSection;