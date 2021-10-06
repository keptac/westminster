import { Helmet } from 'react-helmet';
// import { withAlert, positions } from 'react-alert';

import {
  Box,
  Container,
  CardContent,
  Card,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Badge
} from '@material-ui/core';
import moment from 'moment';
import NoticeBoard from 'src/components/NoticeBoard';
import DashboardCard from 'src/components/schoolAdmin/DashboardCard';
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import SchoolAdminServices from '../../services/schoolAdmin';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectData: [],
      reportData: [],
      downloaded: false
    };
  }

  componentDidMount() {
    this.getDashData();
  }

  getDashData() {
    const { subjectData } = this.state;

    SchoolAdminServices.getAllClasses()
      .then((response) => {
        subjectData.push({ name: 'Classes', count: response.length });
        this.setState({ subjectData });
      });
    SchoolAdminServices.getAllSubjects()
      .then((response) => {
        subjectData.push({ name: 'Subjects', count: response.length });
        this.setState({ subjectData });
      });
    SchoolAdminServices.getAllTeachers()
      .then((response) => {
        subjectData.push({ name: 'Teachers', count: response.length });
        this.setState({ subjectData });
      });
  }

  downloadReports() {
    // const {alert} = this.props;

    SchoolAdminServices.downloadReports()
      .then((response) => {
        console.log(response);
        if (response.success) {
          // alert.info('Download started please check your downloads folder.', { position: positions.MIDDLE }, {
          //   timeout: 2000,
          // });
          this.setState({ downloaded: true });
        } else {
          this.setState({ downloaded: false });
          // alert.error(response.message, { position: positions.MIDDLE }, {
          //   timeout: 2000,
          // });
        }
      });
  }

  render() {
    const {
      subjectData, reportData, downloaded
    } = this.state;
    return (
      <>
        <Helmet>
          <title>Admin Dashboard</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <Grid
              container
              spacing={3}
              sx={{ marginTop: '0.1%' }}
            >
              <Grid
                item
                lg={8}
                md={8}
                xl={9}
                xs={12}
              >

                <Grid
                  container
                  spacing={3}
                >
                  {subjectData.map((resource) => (
                    <Grid
                      item
                      key={resource.id}
                      lg={4}
                      md={6}
                      xs={12}
                    >
                      <DashboardCard resource={resource} />
                    </Grid>

                  ))}
                  <Grid
                    item
                    lg={12}
                    md={6}
                    xs={12}
                  >
                    <Card>
                      <CardContent>
                        <Grid
                          container
                        >
                          <Grid
                            lg={8}
                            md={12}
                            xl={9}
                            xs={12}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'flex-start'
                              }}
                            >
                              <Button
                                sx={{ mx: 1 }}
                              >
                                Current weeks reports will be complete by 01 October 2021
                              </Button>
                            </Box>
                          </Grid>
                          <Grid
                            lg={4}
                            md={12}
                            xl={9}
                            xs={12}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                              }}
                            >
                              <Button
                                color="primary"
                                variant="contained"
                                onClick={() => {
                                  this.downloadReports();
                                }}
                              >
                                {downloaded ? 'Download Successful Check Downloads' : 'Generate Weekly Reports'}
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                  >
                    <Card>
                      <CardContent>
                        <PerfectScrollbar>
                          <Box sx={{ minWidth: 600 }}>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell>
                                    Class
                                  </TableCell>
                                  <TableCell>
                                    Subject
                                  </TableCell>
                                  <TableCell>
                                    Teacher Name
                                  </TableCell>
                                  <TableCell>
                                    Weekending
                                  </TableCell>
                                  <TableCell>
                                    Report Status
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {reportData.map((reportRecord) => (
                                  <TableRow
                                    hover
                                    key={reportRecord.classId}
                                  >
                                    <TableCell>
                                      <Box
                                        sx={{
                                          alignItems: 'center',
                                          display: 'flex'
                                        }}
                                      >
                                        <Typography
                                          color="textPrimary"
                                          variant="body1"
                                        >
                                          {`${reportRecord.className}` }
                                        </Typography>
                                      </Box>
                                    </TableCell>
                                    <TableCell>
                                      {`${reportRecord.subject}`}
                                    </TableCell>
                                    <TableCell>
                                      {`${reportRecord.teacherName}`}
                                    </TableCell>

                                    <TableCell>
                                      {moment(reportRecord.createdAt).format('DD/MM/YYYY')}
                                    </TableCell>
                                    <TableCell
                                      align="enter"
                                    >
                                      stat
                                      <Badge badgeContent={reportRecord.status} color={reportRecord.status === 'Submitted' ? 'success' : 'warning'} />
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>
                        </PerfectScrollbar>
                      </CardContent>
                    </Card>
                  </Grid>

                </Grid>
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                xl={3}
                xs={12}
              >
                <NoticeBoard sx={{ height: '100%' }} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}
export default AdminDashboard;
