import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './page/main/Main';
import Layout from './components/layout/Layout';

import { useAppSelector } from './store/hooks';

const NewRegisterPage = lazy(() => import('./pages/new/index'));
const NewReviewPage = lazy(() => import('./pages/new/review'));
const NewSpotPage = lazy(() => import('./pages/new/spot'));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<NewRegisterPage />} />
        <Route path="/new/review" element={<NewReviewPage />} />
        <Route path="/new/spot" element={<NewSpotPage />} />
      </Route>
    </Routes>
  );
}

export default App;
