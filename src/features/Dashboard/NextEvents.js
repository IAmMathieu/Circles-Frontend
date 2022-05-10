import './style.scss';

function NextEvents({ data }) {
  return (
    <div className='nextevents'>
      <h3 className='mb-10'> Prochains Evenements</h3>
      <ul className='text-left pl-10 pr-10'>
        {data?.map((data) => {
          if (data !== null) {
            return data.events.map((event) => {
              return (
                <li className='font-light border-solid border-b-2 border-white mb-10 pb-10'>
                  5 mai - {event.title}
                </li>
              );
            });
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}

export default NextEvents;
