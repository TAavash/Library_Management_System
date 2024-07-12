import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for Calendar

const TailwindCalendar = (props) => {
  return (
    <div className="p-4 bg-red-00 rounded-xl border border-red-400">
      <Calendar {...props} />
    </div>
  );
};

export default TailwindCalendar;
