import * as React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay';
import {fr} from 'date-fns/locale';


const locales = {
    'fr': fr,
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
      title: 'Strip Tease Aleks',
      start: new Date(2022, 4, 7),
      end: new Date(2022, 4, 7),
    },
    {
      title: 'Anniversaire Tati Daniele',
      start: new Date(2022, 4, 20),
      end: new Date(2022, 4, 22),
    },
  ];


export const CirclePage = () => {

    return(
            <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height:'25rem', width:'75%', 
      border:'5px solid red', borderRadius:'30px', 
      background:'green', margin:'auto'}}
      culture={'fr'}
    />
  </div>
    )
}