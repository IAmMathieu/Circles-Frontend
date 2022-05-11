import './style.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function NewCircle() {
  return (
    <a className='newcircle'
         href='/newcircle'
    >
        <AddCircleIcon className='newcircle--addCircleIcon'
        color='secondary' />
    </a>
  );
}

export default NewCircle;
