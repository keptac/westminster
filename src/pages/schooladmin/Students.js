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
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

import students from 'src/__mocks__/students';
import classes from 'src/__mocks__/classes';
import PerfectScrollbar from 'react-perfect-scrollbar';

const AddStudents = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [className, setClassName] = useState('');
  const [addStudentForm, setStatus] = useState(false);

  const [values, setValues] = useState({
    name: null,
    surname: null,
    studentId: null,
    classId: null,
    dob: null,
    phoneNumber: null,
    emailAddress: null
  });

  const handleChangeAdd = () => {
    setStatus(true);
  };

  const handleChangeClass = (event) => {
    setClassName(event.target.value);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleSubmit = () => {
    // Pass to api
  };

  return (
    <>
      <Helmet>
        <title>Subjects | Vivid Learn</title>
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
                              Student ID
                            </TableCell>
                            <TableCell>
                              Student Name
                            </TableCell>
                            <TableCell>
                              DOB
                            </TableCell>
                            <TableCell>
                              Phone Number
                            </TableCell>
                            <TableCell>
                              Email
                            </TableCell>
                            <TableCell>
                              Class
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {students.slice(0, limit).map((subject) => (
                            <TableRow
                              hover
                              key={subject.studentId}
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
                                    {subject.studentId}
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell>
                                {`${subject.surname} ${subject.name}` }
                              </TableCell>
                              <TableCell>
                                {`${subject.dob}`}
                              </TableCell>
                              <TableCell>
                                {subject.phoneNumber}
                              </TableCell>
                              <TableCell>
                                {subject.emailAddress}
                              </TableCell>
                              <TableCell>
                                {subject.classId}
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
              lg={4}
              md={12}
              xs={12}
            >
              <Box sx={{ pt: 3 }}>
                {addStudentForm ? (
                  <form
                    autoComplete="off"
                    noValidate
                  >
                    <Card>
                      <CardHeader
                        title="Add New New Student"
                      />
                      <Divider />
                      <CardContent>
                        <Grid
                          container
                          spacing={1}
                        >
                          <Grid
                            item
                            md={6}
                            xs={12}
                          >
                            <TextField
                              fullWidth
                              label="Student Name"
                              name="name"
                              onChange={handleChange}
                              required
                              value={values.name}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            md={6}
                            xs={12}
                          >
                            <TextField
                              fullWidth
                              label="Surname"
                              name="surname"
                              onChange={handleChange}
                              required
                              value={values.surname}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            md={8}
                            xs={12}
                          >
                            <TextField
                              fullWidth
                              label="Date of Birth"
                              name="dob"
                              type="date"
                              onChange={handleChange}
                              required
                              value={values.dob}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            md={6}
                            xs={12}
                          >
                            <TextField
                              fullWidth
                              label="Phone Number"
                              name="phoneNumber"
                              type="number"
                              onChange={handleChange}
                              required
                              value={values.phoneNumber}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            md={6}
                            xs={12}
                          >
                            <TextField
                              fullWidth
                              label="Email Address"
                              name="emailAddress"
                              type="email"
                              onChange={handleChange}
                              required
                              value={values.emailAddress}
                              variant="outlined"
                            />
                          </Grid>

                          <Grid
                            item
                            md={5}
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
                          Add Student
                        </Button>
                      </Box>
                    </Card>
                  </form>
                )
                  : (
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleChangeAdd}
                    >
                      Add New Student
                    </Button>
                  )}
              </Box>
            </Grid>
          </Grid>

        </Container>
      </Box>
    </>
  );
};

export default AddStudents;
