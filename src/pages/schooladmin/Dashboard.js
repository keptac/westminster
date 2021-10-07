/* eslint-disable no-alert */
import { Helmet } from 'react-helmet';
import { jsPDF as JsPdf } from 'jspdf';
import * as html2canvas from 'html2canvas';

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

// import StudentReport from 'src/components/reportTemplate';
import SchoolAdminServices from '../../services/schoolAdmin';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectData: [],
      reportData: [],
      downloaded: false,
      marksResults: [],
      students: []
    };
  }

  componentDidMount() {
    this.getDashData();
    this.getTeacherSubmissions();
    this.getStudents();
  }

  async getTeacherSubmissions() {
    SchoolAdminServices.getTeacherSubmissions()
      .then((response) => {
        this.setState({ marksResults: response });
      }).catch((error) => {
        console.log(error);
      });
  }

  async getStudents() {
    SchoolAdminServices.getAllStudents()
      .then((response) => {
        this.setState({ students: response });
      }).catch((error) => {
        console.log(error);
      });
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
    const { marksResults, students } = this.state;
    let count = 0;
    let failedCount = 0;
    if (marksResults.length > 0) {
      students.forEach((student) => {
        SchoolAdminServices.getStudentReport(student.studentId)
          .then((response) => {
            console.log('Processinf');
            if (response.success) {
              console.log(response.marks);
              const htmlString = '<div id="capture"><h4> Hello Test Frames</h4></div>';
              const iframe = document.createElement('iframe');
              document.body.appendChild(iframe);
              const iframedoc = iframe.contentDocument || iframe.contentWindow.document;
              iframedoc.body.innerHTML = htmlString;
              html2canvas(iframedoc.body)
                .then((canvas) => {
                  const imgData = canvas.toDataURL('image/png');
                  const pdf = JsPdf('l');
                  pdf.addImage(imgData, 'PNG', 0, 0);
                  pdf.save(`${student.surname} ${student.name} ${student.studentId}.pdf`);
                  document.body.removeChild(iframe);
                });
            } else {
              failedCount++;
              console.log(`${response.error} --> ${student.firstName} ${student.surname} ${student.studentid}`);
              // Send back to backend to log failed records.
            }
            if (count + failedCount >= students.length) {
              console.log('Processed');
              this.setState({ downloaded: true });
              alert(`${count} Reports generated successfully. Kindly check your downloads folder. \n\n${failedCount} Failed`);
            }
          });
        count++;
      });
    } else {
      alert('No reports have been submitted for processing. Kindly request teachers to submit reports');
    }
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
                              {/* <StudentReport studentResults={students} /> */}
                              {downloaded
                                ? (
                                  <Button
                                    color="primary"
                                    variant="contained"
                                  >
                                    Download Successful Check Downloads
                                  </Button>
                                )
                                : (
                                  <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => {
                                      this.downloadReports();
                                    }}
                                  >
                                    Generate Weekly Reports
                                  </Button>
                                )}
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
