import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from './store/hooks';

const NewRegisterPage = lazy(() => import('./pages/new/index'));
const NewReviewPage = lazy(() => import('./pages/new/review'));
const NewSpotPage = lazy(() => import('./pages/new/spot'));

function App() {
  //테스트용으로 redux 넣어놨습니당
  const test = useAppSelector((state) => state.test.value);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="App text-center h-screen flex items-center justify-center flex-col font-pretendard">
              <br />
              <p className="font-bold">{test} 합시당!</p>
            </div>
          </>
        }
      />
      <Route path="/new" element={<NewRegisterPage />} />
      <Route path="/new/review" element={<NewReviewPage />} />
      <Route path="/new/spot" element={<NewSpotPage />} />
    </Routes>
  );
}

export default App;
