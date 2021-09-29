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

import subs from 'src/__mocks__/subjects';
import PerfectScrollbar from 'react-perfect-scrollbar';

const AddSubject = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [level, setLevel] = useState('');
  const [subjects, setSubjects] = useState(subs);

  const [values, setValues] = useState({
    subject: null,
  });

  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
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
    console.log(level);
    console.log(values.subjectName);
    subjects.push({
      level,
      subjectName: values.subjectName,
      subjectCode: 'SUB120'
    });

    setSubjects(subjects);

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
                              Subject Code
                            </TableCell>
                            <TableCell>
                              Subject Name
                            </TableCell>
                            <TableCell>
                              Level
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {subjects.slice(0, limit).map((subject) => (
                            <TableRow
                              hover
                              key={subject.subjectCode}
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
                                    {`${subject.subjectCode}` }
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell>
                                {`${subject.subjectName}`}
                              </TableCell>
                              <TableCell>
                                {subject.level}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </PerfectScrollbar>
                  <TablePagination
                    component="div"
                    count={subjects.length}
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
                      title="Add New Subject"
                    />
                    <Divider />
                    <CardContent>
                      <Grid
                        container
                        spacing={3}
                      >
                        <Grid
                          item
                          md={8}
                          xs={12}
                        >
                          <TextField
                            fullWidth
                            label="Subject Name"
                            name="subjectName"
                            onChange={handleChange}
                            required
                            value={values.subjectName}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={12}
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Level</InputLabel>
                            <Select
                              // labelId="demo-simple-select-label"
                              // id="demo-simple-select"
                              value={level}
                              label="Level"
                              onChange={handleChangeLevel}
                              required
                              variant="outlined"
                            >
                              <MenuItem value="GCSE">GCSE</MenuItem>
                              <MenuItem value="AS Level">AS Level</MenuItem>
                              <MenuItem value="A Level">A Level</MenuItem>
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
                        Add Subject
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

export default AddSubject;
