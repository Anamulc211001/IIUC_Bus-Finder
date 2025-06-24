import { useState, useMemo } from 'react';
import { BusSchedule, Direction, Gender, BusType, ScheduleType } from '../types/BusSchedule';

export const useSearch = (schedules: BusSchedule[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [direction, setDirection] = useState<Direction>('All');
  const [gender, setGender] = useState<Gender>('All');
  const [busType, setBusType] = useState<BusType>('All');
  const [scheduleType, setScheduleType] = useState<ScheduleType>('All');

  const filteredSchedules = useMemo(() => {
    return schedules.filter((schedule) => {
      const matchesSearch = searchTerm === '' || 
        schedule.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.startingPoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.endPoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (schedule.busType && schedule.busType.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (schedule.remarks && schedule.remarks.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (schedule.description && schedule.description.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDirection = direction === 'All' || schedule.direction === direction;
      const matchesGender = gender === 'All' || schedule.gender === gender;
      const matchesBusType = busType === 'All' || schedule.busType === busType;
      const matchesScheduleType = scheduleType === 'All' || schedule.scheduleType === scheduleType;

      return matchesSearch && matchesDirection && matchesGender && matchesBusType && matchesScheduleType;
    });
  }, [schedules, searchTerm, direction, gender, busType, scheduleType]);

  const isSearching = searchTerm !== '' || direction !== 'All' || gender !== 'All' || busType !== 'All' || scheduleType !== 'All';

  return {
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
  };
};