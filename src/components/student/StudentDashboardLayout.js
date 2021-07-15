import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import DashboardNavbar from '../DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const StudentDashboardLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const StudentDashboardLayoutWrapper = experimentalStyled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  })
);

const StudentDashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const StudentDashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const StudentDashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <StudentDashboardLayoutRoot>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <StudentDashboardLayoutWrapper>
        <StudentDashboardLayoutContainer>
          <StudentDashboardLayoutContent>
            <Outlet />
          </StudentDashboardLayoutContent>
        </StudentDashboardLayoutContainer>
      </StudentDashboardLayoutWrapper>
    </StudentDashboardLayoutRoot>
  );
};

export default StudentDashboardLayout;
