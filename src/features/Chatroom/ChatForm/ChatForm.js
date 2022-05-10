import './ChatForm.scss';

export default function ChatForm() {
  return (
    <form className="chatForm">
        <input 
        className='chatForm__input' 
        type='text'
        placeholder='Entrez votre message...' />
        <button className='chatForm__button' type='submit'>Envoyer</button>
    </form>
  );
}
