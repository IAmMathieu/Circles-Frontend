import './style.scss';
import logo from './../../logo.svg';
import NewEntry from './NewEntry';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function LeftPanel() {
  const userPicture =
    'https://ca.slack-edge.com/T02MBC4J9K5-U02M8CJUVJR-2df2ffa3c507-512';
  const username = 'Aleks';

  return (
    <div className='leftmenu'>
      <img src={logo} alt='Logo Circles' className='leftmenu--circle-logo' />
      <img src={userPicture} className='leftmenu--user-picture' />
      <span className='leftmenu--profile-name'>{username}</span>
      <a href="/profil">
        <BorderColorIcon />
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
      </div>
    </div>
  );
}

export default LeftPanel;
