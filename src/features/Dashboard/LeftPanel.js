import './style.scss';
import logo from './../../logo.svg';
import NewEntry from './NewEntry';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import Carousel from 'react-grid-carousel';
import { useDispatch } from 'react-redux';
import { removeStorage } from '../../utils/helperLocalStorage';
import { handleToken } from '../auth/authSlice';
import { Link } from 'react-router-dom';
import logoLight from "./../../assets/images/fullLogoLight.svg"
function LeftPanel({ logout }) {
  const dispatch = useDispatch();
  const userPicture =
    'https://ca.slack-edge.com/T02MBC4J9K5-U02M8CJUVJR-2df2ffa3c507-512';
  const username = 'Aleks';

  return (
    <div className=' w-full px-8'>
      <div className="grid grid-cols-7">
        <img
          src={userPicture}
          alt='User Portrait'
          className='w-14 h-14 rounded-full self-end col-start-1 col-end-3 '
        />
        <img src={logoLight} alt='Logo Circles' className='w-[200px] h-[120px] col-start-3 col-end-6' />
      </div>
      {/* 
      <Link className='leftmenu--profile-name' to='/profil'>
      <div className='leftmenu--recent-container'>
        <Carousel
          cols={1}
          rows={3}
          gap={10}
          showDots
          hideArrow
          responsiveLayout={[
            { breakpoint: 1000, cols: 2 },
            { breakpoint: 750, cols: 1 },
          ]}
        >
          <Carousel.Item>
            <NewEntry
              author='Flo'
              circle="O'clock"
              event="Ajout d'un anniversaire"
            />
          </Carousel.Item>
          <Carousel.Item>
            <NewEntry
              author='Aleks'
              circle="O'clock"
              event="Ajout d'un anniversaire"
            />
          </Carousel.Item>
          <Carousel.Item>
            <NewEntry
              author='Flo'
              circle="O'clock"
              event="Ajout d'un anniversaire"
            />
          </Carousel.Item>
          <Carousel.Item>
            <NewEntry
              author='Aleks'
              circle="O'clock"
              event="Ajout d'un anniversaire"
            />
          </Carousel.Item>
        </Carousel>
      </div>
        {username} <BorderColorIcon />
      </Link>

      <hr class='leftmenu--line' />
      <h3>Activité récente</h3>
      <div className='leftmenu--linkscontainer'>
        <button
          type='button'
          className='leftmenu--links'
          onClick={() => {
            dispatch(
              handleToken({
                token: '',
                user_id: '',
              })
            );
            removeStorage('token');
            removeStorage('user_id');
          }}
        >
          <LogoutIcon />
        </button>
        <a className='leftmenu--links' href='/contact'>
          <AlternateEmailIcon />
        </a>
        <a className='leftmenu--links' href='/faq'>
          <HelpOutlineIcon />
        </a>
      </div> */}
    </div>
  );
}

export default LeftPanel;
