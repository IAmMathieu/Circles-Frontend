import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  useDeleteCircleMutation,
  useGetCircleQuery,
  useModifyCircleMutation,
} from './CircleApi';
import CircleBottomNavigation from './CircleBottomNavigation';
import { CirclePage } from '../CirclePage/CirclePage';
import CircleChat from './Chat/CircleChat';
import CircleHeader from './CircleHeader';
import { useGetProfilUserQuery } from '../ProfilePage/ProfilApi';
import { useEffect, useState } from 'react';
import ModalModifyCircle from './ModalModifyCircle';
import { changeCircle } from './CircleSlice';

export default function Circle() {
  // Get id of the route

  const dispatch = useDispatch();
  const { circle_id } = useParams();
  // Get the token and user_id from the state auth
  const { user_id, token } = useSelector((state) => state.auth);
  const [dataCircle, setDataCircle] = useState();
  // Get the menu from the state circle
  const { menu, name, description, color, img_url } = useSelector(
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
   * Modal to modify circle
   */
  const [openModify, setOpenModify] = useState(false);
  const toggleModify = () => {
    setOpenModify(!openModify);
  };
  const [
    modifyCircle,
    {
      data: dataModifyCircle,
      isError: modifyCircleError,
      isSuccess: modifyCircleSuccess,
    },
  ] = useModifyCircleMutation();
  const [
    deleteCircle,
    {
      data: dataDeleteCircle,
      isError: deleteCircleError,
      isSuccess: deleteCircleSuccess,
    },
  ] = useDeleteCircleMutation();
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
    if (circleData?.name) document.title = `Circle - ${circleData?.name}`;
    dispatch(changeCircle({ circle_id, name, desc: description, img_url }));
  }, [CircleIsSuccess]);

  return (
    // <Box className=' relative flex flex-col items-center p-5 h-screen custom-bk:pr-[10vh] pt-20 custom-bk:pt-40 overflow-hidden'>
    <Box className=' relative flex flex-col items-center pt-5 pl-0 custom-bk:pl-20 h-screen custom-bk:pr-[5vh]  overflow-hidden'>
      <CircleHeader circleData={circleData} />
      {/* <Button onClick={toggleModify}>TestUpdate</Button> */}

      <ModalModifyCircle
        refetch={circleRefetch}
        dataModifyCircle={circleData}
        modifyCircle={modifyCircle}
        modifyCircleSuccess={modifyCircleSuccess}
        open={openModify}
        toggleModify={toggleModify}
        modifyCircleError={modifyCircleError}
        deleteCircle={deleteCircle}
      />
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
