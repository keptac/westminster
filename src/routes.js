import { Navigate } from 'react-router-dom';
import StudentDashboardLayout from 'src/components/student/StudentDashboardLayout';

import MainLayout from 'src/components/MainLayout';

// Pages
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';

import Account from 'src/pages/student/Account';
import Chat from 'src/pages/student/Chat';
import Dashboard from 'src/pages/student/Dashboard';
import Library from 'src/pages/student/Library';
import VirtualClass from 'src/pages/student/VirtualClass';
import ProgressReport from './pages/student/ProgressReport';
import SubjectContent from './pages/student/SubjectContent';

const routes = [
  // Student Routes
  {
    path: 'student',
    element: <StudentDashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'chat', element: <Chat /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'library', element: <Library /> },
      { path: 'virtual-class', element: <VirtualClass /> },
      { path: 'report', element: <ProgressReport /> },
      { path: 'subject', element: <SubjectContent /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },

  // Teacher Routes
  {
    path: 'teacher',
    element: <StudentDashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  // School Admin Routes
  {
    path: 'school-admin',
    element: <StudentDashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  // Super Admin Routes
  {
    path: 'app',
    element: <StudentDashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  // Default Routes
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
