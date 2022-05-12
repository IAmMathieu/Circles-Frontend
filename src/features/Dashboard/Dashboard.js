import { useSelector } from 'react-redux';
import { useGetUserDashBoardQuery } from '../Dashboard_old/DashboardApi';
import MiniDrawer from './miniDrawer';

export const Dashboard = () => {
  const { surname, logged, token, user_id } = useSelector(
    (state) => state.auth
  );
  const {
    data: DashData,
    isLoading: loginIsLoading,
    isError: loginIsError,
  } = useGetUserDashBoardQuery({
    token,
    user_id,
  });
  return <div>{/* <MiniDrawer /> */}</div>;
};
