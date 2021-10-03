/* eslint-disable prefer-const */
import { Helmet } from 'react-helmet';
// import { useState } from 'react';
import React from 'react';

import {
  Box, Container, Grid, Avatar,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  CardHeader,
  Divider,
  Button,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
// import StudentResults from 'src/components/teacher/progressReport/StudentResults';
import MarksForm from 'src/components/teacher/progressReport/MarksForm';
import students from 'src/__mocks__/students';
// import studentsMarks from 'src/__mocks__/studentsMarks';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';

import getInitials from 'src/utils/getInitials';
import TeacherServices from 'src/services/teacher';

// const ProgressReport = () => {
class ProgressReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectStudent: '',
      limit: 10,
      page: 0,
      studentRecord: {},
      reviewRecord: true,
      marksResults: []
    };
  }

  componentDidMount() {
    console.log('User Defined Loading');
    this.getStudentReports();
  }

  handleReviewRecordChange() {
    // if (value) {
    //   this.setState({ reviewRecord: false });
    // } else {
    this.setState({ reviewRecord: true });
    // }
  }

  handleLimitChange(event) {
    this.setState({ limit: event.target.value });
  }

  handlePageChange(newPage) {
    this.setState({ page: newPage });
  }

  handleMarkRecording(row) {
    this.setState({ studentRecord: row });
    this.setState({ selectStudent: row.studentId });
    localStorage.setItem('studentRecord', JSON.stringify(row));
  }

  getStudentReports() {
    TeacherServices.getStudentMarksPerClass('CLC001')
      .then((response) => {
        console.log(response);
        this.setState({ marksResults: response });
      });
  }

  render() {
    const {
      selectStudent, limit, page, studentRecord, reviewRecord, marksResults
    } = this.state;
    return (
      <>
        <Helmet>
          <title>Progress Report | Vivid Learn</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <Box>
              <Box sx={{ mt: 3 }}>
                <Card>
                  <CardContent>
                    <Grid
                      container
                    >
                      <Grid
                        lg={6}
                        md={12}
                        xl={9}
                        xs={12}
                      >
                        <Box sx={{ maxWidth: 500 }}>
                          <TextField
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SvgIcon
                                    fontSize="small"
                                    color="action"
                                  >
                                    <SearchIcon />
                                  </SvgIcon>
                                </InputAdornment>
                              )
                            }}
                            placeholder="Search student"
                            variant="outlined"
                          />
                        </Box>
                      </Grid>
                      <Grid
                        lg={6}
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
                          <Button sx={{ mx: 1 }}>
                            {reviewRecord ? 'View Students List' : 'Review Records'}
                          </Button>
                          <Button
                            color="primary"
                            variant="contained"
                          >
                            Submit Reports
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Grid
              container
              spacing={3}
              sx={{ marginTop: '0.1%' }}
            >

              {reviewRecord ? (
                <Grid
                  item
                  lg={8}
                  md={12}
                  xl={9}
                  xs={12}
                >
                  <Box sx={{ pt: 3 }}>
                    <Card>
                      <PerfectScrollbar>
                        <Box sx={{ minWidth: 950 }}>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>
                                  Student Name
                                </TableCell>
                                <TableCell>
                                  Mark
                                </TableCell>
                                <TableCell>
                                  Grade
                                </TableCell>
                                <TableCell>
                                  Comment
                                </TableCell>
                                <TableCell>
                                  Date
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {marksResults.slice(0, limit).map((student) => (
                                <TableRow
                                  hover
                                  key={student.studentId}
                                  selected={selectStudent === student.studentId}
                                >
                                  <TableCell>
                                    <Box
                                      sx={{
                                        alignItems: 'center',
                                        display: 'flex'
                                      }}
                                    >
                                      <Avatar
                                        src={student.avatarUrl}
                                        sx={{ mr: 2 }}
                                      >
                                        {getInitials(`${student.firstName} ${student.surname}`)}
                                      </Avatar>
                                      <Typography
                                        color="textPrimary"
                                        variant="body1"
                                      >
                                        {`${student.firstName} ${student.surname}` }
                                      </Typography>
                                    </Box>
                                  </TableCell>
                                  <TableCell>
                                    {`${student.mark}`}
                                  </TableCell>
                                  <TableCell>
                                    {student.grade}
                                  </TableCell>
                                  <TableCell>
                                    {student.comment}
                                  </TableCell>
                                  <TableCell>
                                    {moment(student.createdAt).format('DD/MM/YYYY')}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </PerfectScrollbar>
                      <TablePagination
                        component="div"
                        count={students.length}
                        onPageChange={this.handlePageChange}
                        onRowsPerPageChange={this.handleLimitChange}
                        page={page}
                        rowsPerPage={limit}
                        rowsPerPageOptions={[5, 10, 25]}
                      />
                    </Card>

                  </Box>
                </Grid>

              ) : (
                <Grid
                  item
                  lg={8}
                  md={12}
                  xl={9}
                  xs={12}
                >
                  <Box sx={{ pt: 3 }}>
                    <Card>
                      <PerfectScrollbar>
                        <Box sx={{ minWidth: 950 }}>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>
                                  Student Name
                                </TableCell>
                                <TableCell>
                                  Mark
                                </TableCell>
                                <TableCell>
                                  Grade
                                </TableCell>
                                <TableCell>
                                  Comment
                                </TableCell>
                                <TableCell>
                                  Date
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {students.slice(0, limit).map((student) => (
                                <TableRow
                                  hover
                                  key={student.studentId}
                                  selected={selectStudent === student.studentId}
                                  onClick={() => this.handleMarkRecording(student)}
                                >
                                  <TableCell>
                                    <Box
                                      sx={{
                                        alignItems: 'center',
                                        display: 'flex'
                                      }}
                                    >
                                      <Avatar
                                        src={student.avatarUrl}
                                        sx={{ mr: 2 }}
                                      >
                                        {getInitials(`${student.firstName} ${student.surname}`)}
                                      </Avatar>
                                      <Typography
                                        color="textPrimary"
                                        variant="body1"
                                      >
                                        {`${student.firstName} ${student.surname}` }
                                      </Typography>
                                    </Box>
                                  </TableCell>
                                  <TableCell>
                                    {`${student.mark}`}
                                  </TableCell>
                                  <TableCell>
                                    {student.grade}
                                  </TableCell>
                                  <TableCell>
                                    {student.comment}
                                  </TableCell>
                                  <TableCell>
                                    {moment(student.createdAt).format('DD/MM/YYYY')}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </PerfectScrollbar>
                      <TablePagination
                        component="div"
                        count={students.length}
                        onPageChange={this.handlePageChange}
                        onRowsPerPageChange={this.handleLimitChange}
                        page={page}
                        rowsPerPage={limit}
                        rowsPerPageOptions={[5, 10, 25]}
                      />
                    </Card>

                  </Box>
                </Grid>
              )}

              <Grid
                item
                lg={4}
                md={12}
                xs={12}
              >
                <Box sx={{ pt: 3 }}>
                  {studentRecord.firstName === undefined ? (
                    <Card>
                      <CardHeader
                        title="PLEASE CLICK ON STUDENT TO ADD MARKS"
                      />
                      <Divider />
                    </Card>
                  ) : (<MarksForm studentName={`${studentRecord.firstName} ${studentRecord.surname}`} />) }

                </Box>
              </Grid>
            </Grid>

          </Container>
        </Box>
      </>
    );
  }
}

export default ProgressReport;
