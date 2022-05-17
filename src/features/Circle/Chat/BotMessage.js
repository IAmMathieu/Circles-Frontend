import { Avatar, Grid, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { dateFormat } from '../../../utils/dateFormat';

export default function BotMessage({ text, time }) {
  return (
    <div className=''>
      <ListItemText primary={text}></ListItemText>
    </div>
  );
}
