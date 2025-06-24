import React from 'react';
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import ResultsSection from './components/ResultsSection';
import Footer from './components/Footer';
import { busSchedules } from './data/busSchedules';
import { useSearch } from './hooks/useSearch';

function App() {
  const {
    searchTerm,
    setSearchTerm,
    direction,
    setDirection,
    gender,
    setGender,
    busType,
    setBusType,
    scheduleType,
    setScheduleType,
    filteredSchedules,
    isSearching,
  } = useSearch(busSchedules);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-6 pb-12">
        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          direction={direction}
          onDirectionChange={setDirection}
          gender={gender}
          onGenderChange={setGender}
          busType={busType}
          onBusTypeChange={setBusType}
          scheduleType={scheduleType}
          onScheduleTypeChange={setScheduleType}
        />
        
        <ResultsSection
          schedules={filteredSchedules}
          totalSchedules={busSchedules.length}
          isSearching={isSearching}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;