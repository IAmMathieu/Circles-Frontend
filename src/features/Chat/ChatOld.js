import { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import {
  Box,
  Card,
  Typography,
  CardMedia,
  Divider,
  styled,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Loading } from '../Loading/Loading';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Picker from 'emoji-picker-react';
import { CoPresentTwoTone } from '@mui/icons-material';
// const socket = io.connect('http://localhost:5555');

export const Chat = ({ CircleIsSuccess, circleData, profilData, user_id }) => {
  const client = useRef();
  /**
   * Styled custom badge
   */
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        // animation: 'ripple 1.2s infinite ease-in-out',
        border: 'none',
        content: '""',
      },
    },
  }));
  const [ioData, setIoData] = useState('');
  // Champ contrôlé pour récupérer les messages
  const [messagesWrite, setMessagesWrite] = useState('');
  // Les messages sur lesquels on map
  const [messageToMap, setMessageToMap] = useState([]);

  /**
   * Use for join the socket.io room
   */
  useEffect(() => {
    const socket = io.connect('http://localhost:5555');
    socket.emit('joinRoom', {
      surname: profilData?.surname,
      user_id,
      room: circleData?.unique_code,
    });
    socket.on('message', (data) => {
      setIoData(data);
    });
    client.current = socket;
    if (messageToMap !== null) setMessageToMap(circleData?.messages);
  }, [CircleIsSuccess]);

  useEffect(() => {
    if (CircleIsSuccess) {
      if (messageToMap) {
        setMessageToMap([...messageToMap, ioData && ioData]);
      } else {
        setMessageToMap([ioData && ioData]);
      }
    }
  }, [ioData]);
  /**
   * Allow to send message. We emit it with the input control
   */
  //   const sendMessage = () => {
  //     // Emit un message lorsque l'on appelle la fonction
  //     socket.emit('chatMessage', messagesWrite);
  //   };

  /**
   * Get the data of socket.io, and allow it to messages
   */
  //   useEffect(() => {
  //     // if (click) {
  //     //   socket.emit('chatMessage', messagesWrite);
  //     socket.on('message', (data) => {
  //       setMessageToMap([...messageToMap, data]);
  //       //   setMessageToMap([...messageToMap, data]);
  //     });
  //   }, []);

  return (
    <Card
      sx={{
        margin: '0 auto',
        width: '50%',
        height: '90%',
        backgroundColor: '#212B36',
        display: 'flex',
      }}
    >
      <Box sx={{ flex: '0.1', position: 'relative', padding: '0.5rem 0 0 0' }}>
        <StyledBadge
          overlap='circular'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            marginBottom: '0.5rem',
          }}
          variant='dot'
        >
          <Avatar alt='Remy Sharp' src={profilData?.img_url} />
        </StyledBadge>
      </Box>
      <Divider orientation='vertical' />
      <Box
        sx={{
          flex: '1',
          diplay: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'none',
            height: '5%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'none',
              width: '50%',
            }}
          >
            <TextField
              id='search-bar'
              className='text'
              //   onInput={(e) => {
              //     setSearchQuery(e.target.value);
              //   }}
              label='Search...'
              variant='outlined'
              placeholder='Search...'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton type='submit' aria-label='search'>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Divider />
        <Box
          className='message-container'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '90%',
            overflowY: 'scroll',
          }}
        >
          {messageToMap !== null &&
            messageToMap?.map((message, i) => {
              return (
                <Box key={message + i}>
                  <Typography component='h5' variant='h5'>
                    {message.surname}
                  </Typography>
                  <Typography component='h6' variant='h6'>
                    {message.text}
                  </Typography>
                </Box>
              );
            })}
        </Box>
        <Divider />
        <Box sx={{ height: '5%', display: 'flex', alignItems: 'center' }}>
          <IconButton
            sx={{ display: 'relative' }}
            type='button'
            aria-label='emoji'
          ></IconButton>
          <TextField
            value={messagesWrite}
            onChange={(event) => {
              // Champ contrôlé
              setMessagesWrite(event.target.value);
            }}
            sx={{
              width: '80%',
              height: '100%',
              border: 'none',
            }}
            id='outlined-basic'
            label='Tape a message'
            variant='standard'
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Divider orientation='vertical' />
          <Box
            sx={{
              width: '10%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SendIcon
              onClick={() => {
                client.current.emit('chatMessage', messagesWrite);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
