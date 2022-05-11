import './calendar.scss';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import { fr } from 'date-fns/locale';
import startOfWeek from 'date-fns/startOfWeek';
import { Calendar as Cal, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  fr: fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

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
function Calendar() {
  return (
    <div className='calendar'>
      <h1 className='calendar--title'>Calendrier</h1>
      <Cal
        culture={'fr'}
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
  );
}

export default Calendar;