import { useSelector } from 'react-redux';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const PrivateRoute = ({ path }) => {
  const { token, loading } = useSelector((state) => state.auth);
  const Navigate = useNavigate();

  if (loading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  return token ? Navigate('/dashboard') : Navigate('/');
};
