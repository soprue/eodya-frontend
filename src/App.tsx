import { Route, Routes } from 'react-router-dom';
import Main from './page/main/Main';
import Layout from './components/layout/Layout';

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route
          path="/"
          element={<Main/>}
        />
      </Route>
    </Routes>
  );
}

export default App;
