import React, { useState } from 'react';
import useCalendar from './useCalendar';

export const Calendar = () => {
  const {
    selectedDate,
    daysShort,
    calendars,
    monthNames,
    getPrevMonth,
    getNextMonth,
  } = useCalendar();

  return (
    <div>
      <div>
        <button className="button" onClick={getPrevMonth}>
          👈
        </button>
        {` ${selectedDate.getFullYear()}년 ${
          monthNames[selectedDate.getMonth()]
        }`}
        <button className="button" onClick={getNextMonth}>
          👉
        </button>
      </div>
      <div>
        {daysShort.map((day) => (
          <span key={day.value}>{day.name}</span>
        ))}
      </div>
      <div>
        {calendars.map((calendar) => (
          <span>{calendar.date.getDate()}</span>
        ))}
      </div>
    </div>
  );
};
