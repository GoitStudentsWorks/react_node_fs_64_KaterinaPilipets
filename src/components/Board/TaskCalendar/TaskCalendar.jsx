import React, { useState, forwardRef } from 'react';
// import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';

import { format, isToday } from 'date-fns';
import { BsChevronDown } from 'react-icons/bs';

import DatePicker from 'react-datepicker';

const TaskCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = date => {
    if (isToday(date)) {
      return `Today, ${format(date, 'MMMM d')}`;
    }
    return format(date, 'EEEE, MMMM d');
  };

  const InputOutputBtn = forwardRef(({ _, onClick }, ref) => (
    <button className="input-output-date-btn" onClick={onClick} ref={ref}>
      <span className="date-button-text">{formatDate(selectedDate)}</span>
      <BsChevronDown className="date-picker-arrow" />
    </button>
  ));
  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      customInput={<InputOutputBtn />}
      minDate={Date.now()}
      calendarStartDay={1}
    />
  );
};
export default TaskCalendar;