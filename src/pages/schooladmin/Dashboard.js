import { Helmet } from 'react-helmet';
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
import subjects from 'src/__mocks__/subjects';
import classes from 'src/__mocks__/classes';

import SchoolAdminServices from '../../services/schoolAdmin';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectData: [],
      reportData: []
    };
  }

  // getAssignments = () => {
  //   claseservice.getAssignments(this.state.assignment.countId)
  //     .then((response) => {
  //       this.setState({ assignments: response }, () => {
  //         let pages = [];
  //         let perPage = 5;
  //         const totalPageCount = Math.ceil(
  //           this.state.assignments.length / perPage
  //         );

  //         this.setState({ pages, assignments_ });
  //       });
  //     })
  //     .catch((error) => {
  //       M.toast({
  //         html: "Failed to find assignment folder",
  //         countes: "red accent-2",
  //       });
  //       console.log(error);
  //     });
  // };

  componentDidMount() {
    // this.getDashData();

    this.setState({
      subjectData: [
        {
          name: 'Subjects', route: 'SUB123', count: subjects.length
        },
        {
          name: 'Teachers', route: 'SUB123', count: 2
        },
        {
          name: 'Classes', route: 'SUB123', count: classes.length
        }
      ],
      reportData: [
        {
          className: '3A', subject: 'Shona', classId: 'SUB123', status: 'Pending', teacherName: 'Kelvin Chelenje', reportingPeriod: '', teacherId: ''
        }
      ]
    });

    // this.setState({

    // });
  }

  getDashData() {
    // const reportData = JSON.parse(localStorage.getItem('userAll'));
    // claseservices.getclasesubjects(reportData.classId) // Get all courses by userid
    SchoolAdminServices.getStudentSubjects('STUD128') // Get all subjects for class
      .then((response) => {
        this.setState({ subjectData: response });
      });
    SchoolAdminServices.getClassReportStatuses('STUD128') // Get all subjects for class
      .then((response) => {
        this.setState({ reportData: response });
      });
  }

  render() {
    const { subjectData, reportData } = this.state;
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
                              <Button sx={{ mx: 1 }}>
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
                              >
                                Generate Weekly Reports
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
