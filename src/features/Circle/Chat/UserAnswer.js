import { Avatar, Grid, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

export default function UserAnswer({ surname, time, text, img_url }) {
  return (
    <div>
      <ListItem key='1'>
        <Grid container className='flex column gap-4 justify-end'>
          <Box>
            <Grid item xs={12}>
              <ListItemText align='right' primary={text}></ListItemText>
            </Grid>
            <Grid item xs={12}>
              <ListItemText align='right'>{time}</ListItemText>
            </Grid>
          </Box>
          <Avatar
            alt={surname}
            src='https://material-ui.com/static/images/avatar/3.jpg'
          />
        </Grid>
      </ListItem>
    </div>
  );
}
