import { Navigate } from 'react-router-dom';
import TeacherDashboardLayout from 'src/components/teacher/TeacherDashboardLayout';

import MainLayout from 'src/components/MainLayout';

// Pages
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';

import Dashboard from 'src/pages/teacher/Dashboard';

import ProgressReport from './pages/teacher/ProgressReport';
import AddTeacherClass from './pages/teacher/TeacherClasses';
import SchoolAdminDashboardLayout from './components/schoolAdmin/SchoolAdminLayout';
import AdminDashboard from './pages/schooladmin/Dashboard';
import AddSubject from './pages/schooladmin/Subjects';
import AddStudents from './pages/schooladmin/Students';
import AddClass from './pages/schooladmin/Classes';
import AddNotice from './pages/schooladmin/NoticeBoard';

const routes = [
  // Teacher Routes
  {
    path: 'teacher',
    element: <TeacherDashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'report', element: <ProgressReport /> },
      { path: 'classes', element: <AddTeacherClass /> },
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
      { path: 'classes', element: <AddClass /> },
      { path: 'students', element: <AddStudents /> },
      { path: 'notices', element: <AddNotice /> },
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
