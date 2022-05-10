import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import './style.scss';

function Circle({ title, description }) {
  return (
    <Card className='circle' id='circle'>
      <CardHeader title={title} className='circle--header' />
      <CardMedia
        className='circle--img'
        component='img'
        image='https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      />
      <CardContent className='circle--description'>{description}</CardContent>
      <CardActions className='cardactions'>
        <IconButton aria-label='Calendrier'>
          <CalendarMonthIcon />
        </IconButton>
        <IconButton aria-label='Chat'>
          <ChatIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Circle;
