import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import TaskPage from './pages/tasks/TaskPage';
import NotFoundPage from './pages/404/NotFoundPage';
import RegisterPage from './pages/auth/RegisterPage';

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
        <Route exact path='/register' element={ <RegisterPage /> } />
        <Route exact path='/tasks' element={ <TaskPage /> }>
          {
            loggedIn ? 
            <TaskPage /> 
            : 
            () => {
              alert('You must be logged in. Redirecting to home...')
              return (<Navigate to='/login' replace />)
            }
          }
        </Route>
        <Route element={ <NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
