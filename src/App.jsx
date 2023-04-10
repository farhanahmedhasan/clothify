import { Routes, Route, Outlet } from 'react-router-dom';

import HomePage from './pages/home/HomePage';

function MainNavigation() {
  return (
    <nav>
      <div>I am the Navigation Bar</div>
      <Outlet />
    </nav>
  );
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainNavigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<div>I am Shop Page</div>} />

        <Route path='*' element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
