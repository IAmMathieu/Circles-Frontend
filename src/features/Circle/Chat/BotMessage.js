import { Avatar, Grid, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { dateFormat } from '../../../utils/dateFormat';

export default function BotMessage({ text, time }) {
  return (
    <div>
      <ListItem>
        <Grid container className='flex column gap-4 justify-center '>
          <Grid item xs={12}>
            <ListItemText primary={text}></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText className='text-xs'>{dateFormat(time)}</ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    </div>
  );
}
