import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import StatePage from './pages/home/StatePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/any404'>| Not Existing Route |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>
        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage /> } />
            <Route exact path='/online-state' element={ <StatePage /> } />
            <Route path='/login' element={ LoginPage }>
              {
                logged ? 
                () => {
                  alert('You are logged in. Redirecting to home...')
                  return (<Navigate to='/' replace />)
                } 
                : 
                () => {
                  return (<LoginPage />)
                }
              }
            </Route>
            <Route path='/about' element={ <AboutPage /> } />
            <Route path='/faqs' element={ <AboutPage /> } />
            <Route path='/profile' element={ <ProfilePage /> }>
              {
                logged ? <ProfilePage /> 
                : 
                () => {
                  alert('You must be logged in. Redirecting to home...')
                  return (<Navigate to='/login' replace />)
                }
              }
            </Route>
            <Route path='/tasks' element={ <TaskPage />} />
            <Route 
            exact 
            path='/task/:id'>
            render = {
              ({match}) => (<TaskDetailPage task={taskList[match.params.id-1]} />)
            }
            </Route>
            <Route path='/404' element={ <NotFoundPage /> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
