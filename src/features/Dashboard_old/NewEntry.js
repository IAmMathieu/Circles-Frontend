import './style.scss';

function NewEntry({ author, event, circle }) {
  return (
    <div>
        <span className="author">{author} - {circle} </span>
        <p>•</p>
        <p className="event">{event}</p>
        <hr class= "leftmenu--line" />
    </div>
  );
}


export default NewEntry;
