import { useMemo, useState, useEffect, cloneElement, Children } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
//CALENDRIER
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { fr } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddIcon from '@mui/icons-material/Add';
import moment from 'moment-timezone';
import {
  useCreateEventMutation,
  useDeleteEventMutation,
  useUpdateEventMutation,
} from '../Circle/Calendar/CalendarApi';
import ModalEvent from '../Circle/Calendar/ModalEvent';
import { Button } from '@mui/material';
import { handleChange } from '../Circle/Calendar/CalendarSlice';
import CustomToolbar from './CustomToolBar';
// FIN CALENDRIER
const initialState = {
  title: null,
  start: moment().format('YYYY-MM-DD'),
  end: null,
  description: null,
  color: '#212B36',
  allday: false,
};
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

// const events = [
//   {
//     title: 'Strip Tease Aleks',
//     start: new Date(2022, 4, 7),
//     end: new Date(2022, 4, 7),
//   },
//   {
//     title: 'Anniversaire Tati Daniele',
//     start: new Date(2022, 4, 20),
//     end: new Date(2022, 4, 22),
//   },
//   {
//     title: 'Anniversaire Tonton Gudule',
//     start: new Date(2022, 4, 20),
//     end: new Date(2022, 4, 21),
//   },
// ];
export const CirclePage = ({
  CircleIsSuccess,
  circleIsLoading,
  circleData,
  profilData,
  user_id,
  circle_id,
  circleRefetch,
}) => {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);
  const calendarControlled = useSelector((state) => state.calendar);
  const { token } = useSelector((state) => state.auth);
  const [eventId, setEventId] = useState(null);
  const [eventName, setEventName] = useState(null);
  useEffect(() => {
    circleData && setEvents(circleData.events);
  }, [circleData]);

  const MyDayEvent = ({ children }) =>
    cloneElement(Children.only(children), {
      style: {
        backgroundColor: 'yellow',
        color: 'green',
      },
    });
  // Inconnu au bataillon ?

  const MyOtherNestedComponent = () => <div>NESTED COMPONENT</div>;

  const MyCustomHeader = ({ label }) => {
    <div>
      CUSTOM HEADER :<div>{label}</div>
      <MyOtherNestedComponent />
    </div>;
  };

  MyCustomHeader.propTypes = {
    label: PropTypes.string.isRequired,
  };

  const { components, formats } = useMemo(
    () => ({
      components: {
        toolbar: CustomToolbar,

        day: {
          event: MyDayEvent,
        },
        week: {},
        month: {
          header: ({ date, localizer }) => localizer.format(date, 'eee'),
        },
      },
    }),
    []
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [createEvent] = useCreateEventMutation();
  const [updateEvent] = useUpdateEventMutation();
  const [deleteEvent] = useDeleteEventMutation();
  return (
    <div className='container-circle w-full'>
      <Box
        className='container-circle__box'
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            width: '100%',
            height: '8rem',
          },
          color: 'rgba(255,255,255,0.5)',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          margin: '1rem',
          borderRadius: '15px',
        }}
      ></Box>
      <Box style={{ marginTop: '5rem' }}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Button
            aria-label='add'
            variant='extended'
            onClick={() => {
              setEventName('create');
              handleOpen();
              for (const key in initialState) {
                dispatch(
                  handleChange({
                    name: key,
                    payload: initialState[key],
                  })
                );
              }
            }}
          >
            <AddIcon />
            Ajouter un évènement
          </Button>
        </Box>
        <ModalEvent
          updateEvent={updateEvent}
          deleteEvent={deleteEvent}
          eventName={eventName}
          open={open}
          token={token}
          onClose={handleClose}
          createEvent={createEvent}
          calendarControlled={calendarControlled}
          circle_id={circle_id}
          user_id={user_id}
          circleRefetch={circleRefetch}
          eventId={eventId}
        />
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor='start'
          endAccessor='end'
          popup={true}
          onSelectEvent={(e) => {
            setEventName('update');
            setEventId(e.id);
            handleOpen();
            for (const key in e) {
              dispatch(
                handleChange({
                  name: key,
                  payload: e[key],
                })
              );
            }
          }}
          style={{ height: '30rem', width: '90%', margin: 'auto' }}
          culture={'fr'}
          components={components}
          views={['month']}
          // A retirer si on veut avoir la vue agenda
          //"Vue agenda" peut poser problème en mobile
          // /!\ view = affiche le mois, la semaine ou le jour en défaut
          // /!\ views={['month]} render uniquement le mois
        />
      </Box>
    </div>
  );
};
