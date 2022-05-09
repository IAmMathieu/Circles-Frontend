import './style.scss';
import logo from './../../logo.svg';
import NewEntry from './NewEntry';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';

function LeftPanel({ logout }) {
  const userPicture =
    'https://ca.slack-edge.com/T02MBC4J9K5-U02M8CJUVJR-2df2ffa3c507-512';
  const username = 'Aleks';

  return (
    <div className='leftmenu'>
      <img src={logo} alt='Logo Circles' className='leftmenu--circle-logo' />
      <img src={userPicture} className='leftmenu--user-picture' />
      <a className='leftmenu--profile-name' href="/profil">
      {username} <BorderColorIcon />
      </a>
      <hr class='leftmenu--line' />
      <h3>Activité récente</h3>
      <div className='leftmenu--recent-container'>
        <NewEntry
          author='Flo'
          circle="O'clock"
          event="Ajout d'un anniversaire"
        />
        <NewEntry
          author='Aleks'
          circle="O'clock"
          event="Ajout d'un anniversaire"
        />
        <NewEntry
          author='Flo'
          circle="O'clock"
          event="Ajout d'un anniversaire"
        />
        <NewEntry
          author='Aleks'
          circle="O'clock"
          event="Ajout d'un anniversaire"
        />
      </div>
      <div className="leftmenu--linkscontainer">
        <a className='leftmenu--links' href='mailto:test@aol.com'> <AlternateEmailIcon /> Contact</a>
        <a className='leftmenu--links' href='/faq'> <HelpOutlineIcon /> FAQ</a>
        <a className='leftmenu--links' href='/' onClick={() => logout(undefined)} > <LogoutIcon /> Se déconnecter</a>
      </div>
    </div>
  );
}

export default LeftPanel;
