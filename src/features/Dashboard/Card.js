import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { truncateString } from '../../utils/truncateString';
import SvgIcon from '@mui/material/SvgIcon';
import { Box } from '@mui/system';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { CssBaseline, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));
export default function CircleCard({
  name,
  img_url,
  desc,
  id,
  nb_number,
  nb_online,
  nb_events,
}) {
  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card
      className='overflow-hidden rounded-xl relative '
      sx={{ maxWidth: 345 }}
    >
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
      /> */}
      <Box className='relative'>
        <CardMedia
          className='h-24 custom-bk:h-[194px]'
          component='img'
          image={img_url}
          alt={name}
        />
        <Box className='absolute left-1/2 transform -translate-x-1/2 -bottom-5'>
          <Avatar
            src='https://ca.slack-edge.com/T02MBC4J9K5-U02M8CJUVJR-2df2ffa3c507-512'
            sx={{ bgcolor: red[500] }}
            aria-label='recipe'
          ></Avatar>
          <svg
            className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 z-[-1]'
            height='62'
            viewBox='0 0 144 62'
            width='144'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z'
              fill='var(--background)'
              fill-rule='evenodd'
            />
          </svg>
        </Box>
      </Box>
      <CardContent className='z-10 pt-8 flex flex-col gap-2 bg-darkybg'>
        <Typography className='text-lg custom-bk:text-2xl' component='h5'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {truncateString(desc, 50)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='bg-darkybg flex justify-between'>
        <IconButton className='text-lg'>
          <PersonIcon className=' text-lg mr-2' /> {nb_number}
        </IconButton>
        <Divider orientation='vertical' variant='middle' flexItem />
        <IconButton className='text-lg'>
          <Brightness1Icon
            className=' text-lg mr-2'
            color={`${nb_online === 0 ? 'error' : 'success'}`}
          />
          {nb_online}
        </IconButton>
        <Divider orientation='vertical' variant='middle' flexItem />
        <IconButton className='text-lg'>
          <EventIcon className=' text-lg mr-2' />
          {nb_events}
        </IconButton>
        {/* <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
