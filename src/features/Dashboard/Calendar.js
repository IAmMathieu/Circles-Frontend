import './style.scss';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar as Cal, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  'fr': require("date-fns/locale/fr")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
      title: "Strip Tease Aleks",
      start: new Date(2022, 4, 7),
      end: new Date(2022, 4, 7),
  },
  {
      title: "Anniversaire Tati Daniele",
      start: new Date(2022, 4, 20),
      end: new Date(2022, 4, 22),
  },
];

function Calendar() {
  return (
    <div className='calendar'>
      <Cal localizer={localizer} events={events} 
      startAccessor="start" endAccessor="end" style={{height: 500, margin: "20px"}} />
    </div>
  );
}

export default Calendar;
