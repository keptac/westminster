/* eslint-disable prefer-const */
import { Helmet } from 'react-helmet';
import { useState } from 'react';

import {
  Box, Container, Grid,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  CardContent,
  CardHeader,
  Divider,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

import teacherClasses from 'src/__mocks__/teacherClasses';
import classes from 'src/__mocks__/classes';
import subjects from 'src/__mocks__/subjects';
import PerfectScrollbar from 'react-perfect-scrollbar';

const AddTeacherClass = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const [className, setClassName] = useState('');

  const [subject, setSubject] = useState('');

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleChangeClass = (event) => {
    setClassName(event.target.value);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleSubmit = () => {
    console.log(subject.subjectName);
    console.log(subject.subjectCode);
    console.log(className.className);
    console.log(className.classId);

    teacherClasses.push({
      classId: className.classId,
      class: className.className,
      subjectCode: subject.subjectCode,
      level: 'GCSE',
      subjectName: subject.subjectName,
      teacherId: '',
      teacherName: ''
    });

    // Pass to api
  };

  return (
    <>
      <Helmet>
        <title>Classes | Vivid Learn</title>
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
              lg={7}
              md={12}
              xl={9}
              xs={12}
            >
              <Box sx={{ pt: 3 }}>
                <Card>
                  <PerfectScrollbar>
                    <Box sx={{ minWidth: 600 }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              Class Name
                            </TableCell>
                            <TableCell>
                              Subject
                            </TableCell>
                            <TableCell>
                              Level
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {teacherClasses.slice(0, limit).map((classe) => (
                            <TableRow
                              hover
                              key={classe.classId}
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
                                    {`${classe.class}` }
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell>
                                {`${classe.subjectName}`}
                              </TableCell>
                              <TableCell>
                                {classe.level}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </PerfectScrollbar>
                  <TablePagination
                    component="div"
                    count={teacherClasses.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[5, 10, 25]}
                  />
                </Card>

              </Box>
            </Grid>
            <Grid
              item
              lg={5}
              md={12}
              xs={12}
            >
              <Box sx={{ pt: 3 }}>
                <form
                  autoComplete="off"
                  noValidate
                >
                  <Card>
                    <CardHeader
                      title="Add New Class"
                    />
                    <Divider />
                    <CardContent>
                      <Grid
                        container
                        spacing={3}
                      >
                        <Grid
                          item
                          md={6}
                          xs={12}
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Class</InputLabel>
                            <Select
                              value={className}
                              label="Subject"
                              onChange={handleChangeClass}
                              required
                              variant="outlined"
                            >
                              {classes.map((classe) => (
                                <MenuItem value={classe}>{classe.className}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          md={6}
                          xs={12}
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                            <Select
                              value={subject}
                              label="Subject"
                              onChange={handleChangeSubject}
                              required
                              variant="outlined"
                            >
                              {subjects.map((sub) => (
                                <MenuItem value={sub}>{sub.subjectName}</MenuItem>
                              ))}
                              {/* <MenuItem value="GCSE">GCSE</MenuItem>
                              <MenuItem value="AS Level">AS Level</MenuItem>
                              <MenuItem value="A Level">A Level</MenuItem> */}
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                      }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSubmit}
                      >
                        Save Class
                      </Button>
                    </Box>
                  </Card>
                </form>

              </Box>
            </Grid>
          </Grid>

        </Container>
      </Box>
    </>
  );
};

export default AddTeacherClass;
