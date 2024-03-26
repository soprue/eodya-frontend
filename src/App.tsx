import { Route, Routes } from 'react-router-dom';

import Main from './page/main/Main';
import Layout from './components/layout/Layout';
import LoginPage from './page/login/Login';
import KakaoCallback from './components/login/KakaoCallback';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/api/auth/callback/kakao" element={<KakaoCallback />} />
      </Route>
    </Routes>
  );
}

export default App;
