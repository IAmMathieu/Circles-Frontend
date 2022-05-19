import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useGetCircleQuery } from './CircleApi';
import CircleBottomNavigation from './CircleBottomNavigation';
import { CirclePage } from '../CirclePage/CirclePage';
import CircleChat from './Chat/CircleChat';
import CircleHeader from './CircleHeader';
import { useGetProfilUserQuery } from '../ProfilePage/ProfilApi';
import { useEffect, useState } from 'react';

export default function Circle() {
  // Get id of the route

  const { circle_id } = useParams();
  // Get the token and user_id from the state auth
  const { user_id, token } = useSelector((state) => state.auth);
  const [dataCircle, setDataCircle] = useState();
  // Get the menu from the state circle
  const { menu, name, description, img_url } = useSelector(
    (state) => state.circle
  );
  const [skip, setSkip] = useState(true);

  useEffect(() => {
    if (token !== null && user_id !== null) {
      setSkip(false);
    }
  }, [token]);
  /**
   * Make the query when we are into the circle
   */
  const {
    refetch: circleRefetch,
    data: circleData,
    isSuccess: CircleIsSuccess,
    isLoading: circleIsLoading,
  } = useGetCircleQuery(
    {
      token,
      circle_id,
    },
    {
      skip: skip,
    }
  );

  /**
   * Make the query for get the profil user information
   */
  const { data: profilData } = useGetProfilUserQuery(
    { token, user_id },
    {
      skip: skip,
    }
  );
  //* Socket part
  /**
   * On détecte et relance le socket join une fois que le circle success a bien été fais.
   */

  //* ------------

  /**
   * Change the name of page with Circle's title
   */
  useEffect(() => {
    document.title = `Circle - ${name}`;
  }, [name]);

  return (
    <Box className=' relative flex flex-col items-center p-5 h-screen custom-bk:pr-[10vh] pt-20 custom-bk:pt-40 overflow-hidden'>
      <CircleHeader circleData={circleData} />
      {menu === 'calendar' ? (
        <CirclePage
          circleRefetch={circleRefetch}
          circleData={circleData}
          profilData={profilData}
          CircleIsSuccess={CircleIsSuccess}
          user_id={user_id}
          circle_id={circle_id}
          circleIsLoading={circleIsLoading}
        />
      ) : (
        <CircleChat
          circleData={circleData}
          profilData={profilData}
          CircleIsSuccess={CircleIsSuccess}
          user_id={user_id}
          circle_id={circle_id}
          circleIsLoading={circleIsLoading}
        />
      )}
      <CircleBottomNavigation />
    </Box>
  );
}
