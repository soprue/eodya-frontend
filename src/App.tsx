import { Route, Routes } from 'react-router-dom';

import Main from './page/main/Main';
import Layout from './components/layout/Layout';
import LoginPage from './page/login/Login';
import KakaoCallback from './components/login/KakaoCallback';
import PrivateRoute from './components/login/PrivateRoute';
import PublicRoute from './components/login/PublicRoute';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} />
        </Route>
        
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/api/auth/callback/kakao" element={<KakaoCallback />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
