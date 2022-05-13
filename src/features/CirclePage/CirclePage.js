import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay';
import {fr} from 'date-fns/locale';

import './CirclePage.scss';

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
        <div className='container-circle'>
            <Box className='container-circle__box'
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                width: '100%',
                height: '8rem',
                position: 'asbolute'
                },
            }}
            > 
            <Paper elevation={0} sx={{
                backgroundImage: "url('https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930_960_720.jpg')",
                backgroundSize:'100%',}} />
            <div className='container-avatar'>
                    <Avatar 
                    alt="Remy Sharp" 
                    src="https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930_960_720.jpg"
                    sx={{width: '8rem', height: '8rem', 
                    position:'relative', top:'-5rem', 
                    margin:'auto',
                    border:'1px solid white'}}/>
        <Typography variant="body2" color="text.secondary" 
        sx={{transform:'translateY(-5rem)', fontWeight:'bold', fontSize:'1.2rem'}}>
Le gras c'est la vie
        </Typography>
            </div>
            </Box>
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

        </div>
    )
}