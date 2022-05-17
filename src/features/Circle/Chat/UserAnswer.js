import { Avatar, Grid, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
<<<<<<< HEAD
import { dateFormat } from '../../../utils/dateFormat';
=======
>>>>>>> 88031b9 ([FIX](chat): allow to fetch data when changing circle or refresh page)

export default function UserAnswer({ surname, time, text, img_url }) {
  return (
    <div>
      <ListItem key='1'>
        <Grid container className='flex column gap-4 justify-end'>
          <Box>
            <Grid item xs={12}>
              <ListItemText align='right' primary={text}></ListItemText>
            </Grid>
<<<<<<< HEAD
            <Grid item xs={12} >
              <ListItemText disableTypography align='right' sx={{fontSize:'.60rem'}}>{dateFormat(time)}</ListItemText>
=======
            <Grid item xs={12}>
              <ListItemText align='right'>{time}</ListItemText>
>>>>>>> 88031b9 ([FIX](chat): allow to fetch data when changing circle or refresh page)
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
