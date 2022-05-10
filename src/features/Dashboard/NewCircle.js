import './style.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function NewCircle() {
  return (
    <div className='newcircle'>
      <AddCircleIcon className='newcircle--addCircleIcon' color='secondary' />
      <a className='newcircle--create' href='/newcircle'>
      </a>
      <hr class='newcircle--line' />
      <a className='newcircle--join' href='/newcircle'>
      </a>
    </div>
  );
}

export default NewCircle;
