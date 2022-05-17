import { Avatar, Grid, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

export default function OtherAnswer({ surname, time, text, img_url }) {
  return (
    <div>
      <ListItem key='2'>
        <Grid container className='flex column gap-4 justify-start'>
          <Box className='order-2'>
            <Grid className='w-fit' item xs={12}>
              <ListItemText align='right' primary={text}></ListItemText>
            </Grid>
            <Grid item xs={12}>
              <ListItemText align='right'>{time}</ListItemText>
            </Grid>
          </Box>
          <Avatar
            alt={surname}
            src='https://material-ui.com/static/images/avatar/3.jpg'
            className='order-1'
          />
        </Grid>
      </ListItem>
    </div>
  );
}
