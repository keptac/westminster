import { Navigate } from 'react-router-dom';
import TeacherDashboardLayout from 'src/components/teacher/TeacherDashboardLayout';

import MainLayout from 'src/components/MainLayout';

// Pages
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';

import Account from 'src/pages/teacher/Account';

import Dashboard from 'src/pages/teacher/Dashboard';

import ProgressReport from './pages/teacher/ProgressReport';
import SubjectContent from './pages/teacher/SubjectContent';
import AddClass from './pages/teacher/Classes';
import SchoolAdminDashboardLayout from './components/schoolAdmin/SchoolAdminLayout';
import AdminDashboard from './pages/schooladmin/Dashboard';
import AddSubject from './pages/schooladmin/Subjects';

const routes = [
  // Teacher Routes
  {
    path: 'teacher',
    element: <TeacherDashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'report', element: <ProgressReport /> },
      { path: 'subject', element: <SubjectContent /> },
      { path: 'classes', element: <AddClass /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },

  // School Admin Routes
  {
    path: 'school-admin',
    element: <SchoolAdminDashboardLayout />,
    children: [
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'subjects', element: <AddSubject /> },
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
