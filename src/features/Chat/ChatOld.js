import {
  Box,
  Card,
  CardMedia,
  Divider,
  styled,
  TextField,
} from '@mui/material';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Picker from 'emoji-picker-react';
import { Loading } from '../Loading/Loading';
import { useGetProfilUserQuery } from '../ProfilePage/ProfilApi';
import { width } from '@mui/system';
import { useGetUserDashBoardQuery } from '../Dashboard_old/DashboardApi';
import { useGetCircleInfoQuery } from '../Circle/CircleApi';
import { useParams } from 'react-router';

//! A voir pour le mettre autre pars pour pas appeller lors du dashboard
const socket = io.connect('http://localhost:5555');
export const Chat = () => {
  const { token, user_id } = useSelector((state) => state.auth);
  const { circle_id } = useParams();
  const [firstLoad, setFirstLoad] = useState(false);
  const sendMessage = () => {
    socket.emit('chatMessage', messageControl);
  };
  const [firstClick, setFirstClick] = useState(false);
  const dispatch = useDispatch();
  const { data } = useGetProfilUserQuery({ token, user_id });
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const { data: circleData, isSuccess } = useGetCircleInfoQuery({
    circle_id,
    token,
  });
  const [messageControl, setMessageControl] = useState('');
  const [message, setMessage] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', {
      surname: data?.surname,
      user_id,
      room: circleData?.unique_code,
    });
  }, []);
  useEffect(() => {
    if (firstLoad) {
      socket.on('message', (data) => {
        const messageReceived = data.message;
        const newMessage = {
          content: messageReceived,
          surname: 'surname',
        };
        setMessage(...message, newMessage);
      });
    }
  }, [socket]);
  useEffect(() => {
    if (isSuccess) {
      setFirstLoad(true);
      setMessage(circleData.messages);
    }
  }, [isSuccess]);
  console.log('message', message && message);
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
    // '@keyframes ripple': {
    //   '0%': {
    //     transform: 'scale(.8)',
    //     opacity: 1,
    //   },
    //   '100%': {
    //     transform: 'scale(2.4)',
    //     opacity: 0,
    //   },
    // },
  }));
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
          <Avatar alt='Remy Sharp' src={data?.img_url} />
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
        <Box sx={{ height: '90%' }}>
          {message?.map(({ message }) => {
            return <p>{message}</p>;
          })}
        </Box>
        <Divider />
        <Box sx={{ height: '5%', display: 'flex', alignItems: 'center' }}>
          <IconButton
            sx={{ display: 'relative' }}
            type='button'
            aria-label='emoji'
          >
            <EmojiEmotionsIcon />
            <Suspense fallback={<Loading />}>
              <Picker
                pickerStyle={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '20px',
                  transformOrigin: 'bottom left',
                  boxShadow: 'none',
                  display: 'none',
                }}
                onEmojiClick={onEmojiClick}
              />
            </Suspense>
          </IconButton>
          <TextField
            onChange={(event) => {
              setMessageControl(event.target.value);
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
                sendMessage(messageControl);
                setMessageControl('');
              }}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
