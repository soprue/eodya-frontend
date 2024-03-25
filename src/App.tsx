import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import { useAppSelector } from './store/hooks';

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
              <img className="mx-auto" src={logo} alt="" width={200} />
              <br />
              <p className="font-bold">{test} 합시당!</p>
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
