import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './store/store';
import Main from './page/main/Main';
import LoginPage from './page/login/Login';
import Layout from './components/layout/Layout';
import KakaoCallback from './components/login/KakaoCallback';
import PrivateRoute from './components/login/PrivateRoute';
import PublicRoute from './components/login/PublicRoute';
import SplashScreen from './components/layout/SplashScreen';

function App() {
  const [loading, setLoading] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    const initialization = sessionStorage.getItem('initialization');

    if (!initialization) {
      // setLoading(true);
      sessionStorage.setItem('initialization', 'true');

      // const timer = setTimeout(() => {
      //   setLoading(false);
      // }, 1500);
      // // return () => clearTimeout(timer);

      const checkLogin = () => {
        const path = window.location.pathname;
        if (!isLoggedIn && path === '/') {
          navigate('/login');
        }
      };

      checkLogin();
    }
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />

        {/* Public Routes */}
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="api/auth/callback/kakao"
          element={
            <PublicRoute>
              <KakaoCallback />
            </PublicRoute>
          }
        />

        {/* Private Routes (예시) */}
        {/* <Route path="profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
