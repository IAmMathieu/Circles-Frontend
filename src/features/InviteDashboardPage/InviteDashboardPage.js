import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import { setStorage } from '../../utils/helperLocalStorage';
import { useActivateEmailQuery } from '../auth/authApi';
import { handleChange, handleToken } from '../auth/authSlice';
import { Loading } from '../Loading/Loading';
import DashbordLoader from '../Dashboard/DashbordLoader';
import { useSearchParams } from 'react-router-dom';
import { useLocalstorageState } from 'rooks';
import { useJoinCircleMutation } from '../Circle/CircleApi';
export const InviteDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code_activate } = useParams();
  const { data, isLoading, isSuccess, isError } = useActivateEmailQuery({
    code_activate,
  });
  const [
    joinCircle,
    {
      data: dataJoinCircle,
      isError: joinCircleError,
      isSuccess: joinCircleSuccess,
    },
  ] = useJoinCircleMutation();
  // const {circlecode} = useParams();
  const { circleInfo } = useParams();
  const [searchParams] = useSearchParams();
  const userExist = searchParams.get('user-exist');
  const [token, setToken] = useLocalstorageState('token', 0);
  const [user_id, setUser_id] = useLocalstorageState('user_id', 0);
  if (token) {
    joinCircle({
      token,
      user_id,
      unique_code: circleInfo,
    });
    navigate('/dashboard', { replace: 'true' });
  } else {
    dispatch(
      handleChange({
        name: 'circleCode',
        payload: circleInfo,
      })
    );
    dispatch(
      handleChange({
        name: 'userExist',
        payload: userExist,
      })
    );
    navigate('/', { replace: 'true' });
  }
};
