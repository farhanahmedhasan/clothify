import { Routes, Route } from 'react-router-dom';

import MainNavigation from './pages/navigation/MainNavigation';
import HomePage from './pages/home/HomePage';
import Authentication from './pages/authentication/Authentication';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainNavigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<div>I am Shop Page</div>} />
        <Route path='auth' element={<Authentication />} />

        <Route path='*' element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
