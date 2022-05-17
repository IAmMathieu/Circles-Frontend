import { Avatar, Grid, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

export default function BotMessage({ text, time }) {
  return (
    <div>
      <ListItem>
        <Grid container className='flex column gap-4 justify-center '>
          <Grid item xs={12}>
            <ListItemText primary={text}></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText>{time}</ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    </div>
  );
}
