import {
  Avatar,
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';

const Chat = () => {
  return (
    <Box className=' bg-darkysubg mb-3 custom-bk:h-full w-full rounded-lg custom-bk:ml-[15vh] p-5 custom-bk:p-10 flex column shadow-2xl darkMode:shadow-none max-w-[2000px] h-[80vh]'>
    
      <Grid container className='w-full h-full flex row'>
        <Grid
          item
          xs={0}
          sm={3}
          md={2}
          className='border-r w-full flex column hidden small:block'
        >
          <List>
            <ListItem button key='RemySharp'>
              <ListItemIcon>
                <Avatar
                  alt='Remy Sharp'
                  src='https://material-ui.com/static/images/avatar/1.jpg'
                />
              </ListItemIcon>
              <ListItemText primary='Remy Sharp'>Remy Sharp</ListItemText>
              <ListItemText secondary='online' align='right'></ListItemText>
            </ListItem>
            <ListItem button key='Alice'>
              <ListItemIcon>
                <Avatar
                  alt='Alice'
                  src='https://material-ui.com/static/images/avatar/3.jpg'
                />
              </ListItemIcon>
              <ListItemText primary='Alice'>Alice</ListItemText>
            </ListItem>
            <ListItem button key='CindyBaker'>
              <ListItemIcon>
                <Avatar
                  alt='Cindy Baker'
                  src='https://material-ui.com/static/images/avatar/2.jpg'
                />
              </ListItemIcon>
              <ListItemText primary='Cindy Baker'>Cindy Baker</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={9} md={10} className='w-full relative right-0'>
          <List className=''>
            <ListItem key='1'>
              <Grid container className='flex column gap-4 justify-end'>
                <Box>
                  <Grid className='w-fit' item xs={12}>
                    <ListItemText
                      align='right'
                      primary="Hey man, What's up ?"
                      className=''
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText align='right'>09:30</ListItemText>
                  </Grid>
                </Box>
                <Avatar
                  alt='Alice'
                  src='https://material-ui.com/static/images/avatar/3.jpg'
                />
              </Grid>
            </ListItem>
            <ListItem key='2'>
              <Grid container className='flex column gap-4 justify-start'>
                <Box className='order-2'>
                  <Grid className='w-fit' item xs={12}>
                    <ListItemText
                      align='right'
                      primary="Hey man, What's up ?"
                      className=''
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText align='right'>09:30</ListItemText>
                  </Grid>
                </Box>
                <Avatar
                  alt='Alice'
                  src='https://material-ui.com/static/images/avatar/3.jpg'
                  className='order-1'
                />
              </Grid>
            </ListItem>
            <ListItem key='3'>
              <Grid container className='flex column gap-4 justify-end'>
                <Box>
                  <Grid className='w-fit' item xs={12}>
                    <ListItemText
                      align='right'
                      primary="Hey man, What's up ?"
                      className=''
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText align='right'>09:30</ListItemText>
                  </Grid>
                </Box>
                <Avatar
                  alt='Alice'
                  src='https://material-ui.com/static/images/avatar/3.jpg'
                />
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container className='absolute w-full bottom-0'>
            <Grid item xs={11}>
              <TextField
                id='outlined-basic-email'
                label='Type Something'
                fullWidth
              />
            </Grid>
            <Grid xs={1} align='right'>
              <Fab color='primary' aria-label='add'>
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
