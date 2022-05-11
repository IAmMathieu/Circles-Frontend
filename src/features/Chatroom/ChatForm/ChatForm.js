import { useDispatch } from 'react-redux';
import { addMessage } from './../actions/actionIndex';

import './ChatForm.scss';

export default function ChatForm() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const action = addMessage();
    dispatch(action);
    console.log('je passe dans le handlesubmit');
    
  }



  return (
    <form className="chatForm" onSubmit={handleSubmit}>
        <input 
        className='chatForm__input' 
        type='text'
        placeholder='Entrez votre message...' />
        <button className='chatForm__button' type='submit'>Envoyer</button>
    </form>
  );
}
