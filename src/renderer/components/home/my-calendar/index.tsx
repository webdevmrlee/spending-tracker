/* eslint-disable react/function-component-definition */
import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import './my-calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, 'days').toDate(),
        title: 'Some title',
      },
    ],
  };
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={state.events}
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default MyCalendar;
