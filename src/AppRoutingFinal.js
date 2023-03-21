import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import NotFoundPage from './pages/404/NotFoundPage';

function AppRoutingFinal() {

  let loggedIn = true;

  return (
    <Router>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path=''>
          {
            loggedIn ? 
            <Navigate from='/' to='/dashboard' /> 
            : 
            <Navigate from='/' to='/login' />
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' element={ <LoginPage />} />
        {/* DashBoard Route */}
        <Route exact path='/dashboard'>
          {
            loggedIn ? 
            <DashBoardPage /> 
            : 
            <Navigate from='/' to='/login' />
          }
        </Route>
        <Route element={ <NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
