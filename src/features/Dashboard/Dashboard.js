import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const { surname, logged } = useSelector((state) => state.auth);

  return (
    <div className='temp'>
      {logged && <p>{surname} Connecté</p>}
      {!logged && <h1>Non loggé</h1>}
    </div>
  );
};
