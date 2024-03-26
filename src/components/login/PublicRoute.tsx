import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { RootState } from '../../store/store';

function PublicRoute() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default PublicRoute;
