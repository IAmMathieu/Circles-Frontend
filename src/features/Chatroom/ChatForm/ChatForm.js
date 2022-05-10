import './ChatForm.scss';

export default function ChatForm() {
  return (
    <form className="chatForm">
        <input className='form__input' type='text' />
        <button className='form__button' type='submit'>Envoyer</button>
    </form>
  );
}
