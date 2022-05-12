import { Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SimpleBottomNavigation from '../Common/BottomNavigation/SimpleBottomNavigation';
import ModaleInput from '../Common/ModaleInput/ModaleInput';
import { useGetUserDashBoardQuery } from '../Dashboard_old/DashboardApi';
import ModaleCreateCircle from '../Dashboard_old/ModaleCreateCircle';
import Card from './Card';

export const Dashboard = () => {
  const { token, user_id } = useSelector((state) => state.auth);
  const userPicture =
    'https://ca.slack-edge.com/T02MBC4J9K5-U02M8CJUVJR-2df2ffa3c507-512';
  const {
    data: DashData,
    isLoading: loginIsLoading,
    isError: loginIsError,
  } = useGetUserDashBoardQuery({
    token,
    user_id,
  });
  const [openCreate, setOpenCreate] = useState(false);

  const toggleCreate = () => {
    setOpenCreate(!openCreate);
  };

  const testcard = {
    name: 'Les adorateurs de Kaamelott',
    desc: 'Je ne mange pas de graines',
    id: 5,
    img_url:
      'https://www.sudinfo.be/sites/default/files/dpistyles_v2/ena_sp_16_9_illustration_principale/2020/11/19/node_283066/45710781/public/2020/11/19/B9725286908Z.1_20201119101404_000+GCBH3AC91.1-0.jpg?itok=j3zTY0PC1605780726',
    nb_number: 12,
    nb_online: 3,
    nb_events: 8,
  };

  return (
    <>
      <div className='flex flex-col items-center p-5 h-full custom-bk:pr-[10vh] overflow-hidden'>
        <img
          className='w-24 h-24 custom-bk:w-32 custom-bk:h-32 rounded-full z-10'
          src={userPicture}
          alt=''
        />
        <div className='card__container bg-darkysubg mb-3 h-full w-full rounded-lg custom-bk:ml-[15vh] p-5 custom-bk:p-10 flex flex-wrap items-start gap-10 justify-center overflow-scroll shadow-2xl darkMode:shadow-none'>
          <Typography
            className='text-xl font-bold custom-bk:text-2xl block w-full '
            component='h5'
          >
            Vos Cercles :
          </Typography>
          <Card
            name={testcard.name}
            desc={testcard.desc}
            id={testcard.id}
            img_url={testcard.img_url}
            nb_number={testcard.nb_number}
            nb_online={testcard.nb_online}
            nb_events={testcard.nb_events}
          />
          <Card
            name={testcard.name}
            desc={testcard.desc}
            id={testcard.id}
            img_url={testcard.img_url}
            nb_number={testcard.nb_number}
            nb_online={0}
            nb_events={testcard.nb_events}
          />
          <Card
            name={testcard.name}
            desc={testcard.desc}
            id={testcard.id}
            img_url={testcard.img_url}
            nb_number={testcard.nb_number}
            nb_online={testcard.nb_online}
            nb_events={testcard.nb_events}
          />
          <Card
            name={testcard.name}
            desc={testcard.desc}
            id={testcard.id}
            img_url={testcard.img_url}
            nb_number={testcard.nb_number}
            nb_online={testcard.nb_online}
            nb_events={testcard.nb_events}
          />
          <Card
            name={testcard.name}
            desc={testcard.desc}
            id={testcard.id}
            img_url={testcard.img_url}
            nb_number={testcard.nb_number}
            nb_online={testcard.nb_online}
            nb_events={testcard.nb_events}
          />
          <Card
            name={testcard.name}
            desc={testcard.desc}
            id={testcard.id}
            img_url={testcard.img_url}
            nb_number={testcard.nb_number}
            nb_online={testcard.nb_online}
            nb_events={testcard.nb_events}
          />
        </div>
        {/* Create */}
        <SimpleBottomNavigation handleClickOpen={toggleCreate} />
      </div>
      <ModaleCreateCircle open={openCreate} handleClose={toggleCreate} />
    </>
  );
};
