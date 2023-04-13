import { Routes, Route } from 'react-router-dom';

import MainNavigation from './pages/navigation/MainNavigation';
import HomePage from './pages/home/HomePage';
import SignIn from './pages/sign-in-up/SignIn';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainNavigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<div>I am Shop Page</div>} />
        <Route path='signin' element={<SignIn />} />

        <Route path='*' element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
