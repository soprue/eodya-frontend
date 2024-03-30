import Mypage from "./page/mypage/Mypage";
import { useEffect, useState, Suspense, lazy } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Layout from './components/layout/Layout';
import KakaoCallback from './components/login/KakaoCallback';
import PrivateRoute from './components/login/PrivateRoute';
import PublicRoute from './components/login/PublicRoute';
// import SplashScreen from './components/layout/SplashScreen';

import Main from './page/main/Main';
import LoginPage from './page/login/Login';
const NewReviewPage = lazy(() => import("./page/new/Review"));
const NewSpotPage = lazy(() => import("./page/new/Spot"));

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

  // if (loading) {
  //   return <SplashScreen />;
  // }

  return (
    <Suspense
      fallback={
        <div
          role="status"
          className="flex h-dvh w-full items-center justify-center"
        >
          <svg
            aria-hidden="true"
            className="inline h-8 w-8 animate-spin fill-primary text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/new/review" element={<NewReviewPage />} />
          <Route path="/new/spot" element={<NewSpotPage />} />
          <Route path="/mypage" element={<Mypage />} />
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
    </Suspense>
  );
}

export default App;
