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
  Button
} from '@material-ui/core';

import subs from 'src/__mocks__/classes';
import PerfectScrollbar from 'react-perfect-scrollbar';

const AddClass = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [classes, setSubjects] = useState(subs);

  const [values, setValues] = useState({
    className: null,
  });

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
    console.log(values.className);
    classes.push({
      className: values.className,
      classId: 'CLC120'
    });

    setSubjects(classes);

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
                              Class Code
                            </TableCell>
                            <TableCell>
                              Class Name
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {classes.slice(0, limit).map((classe) => (
                            <TableRow
                              hover
                              key={classe.className}
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
                                    {`${classe.classId}` }
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell>
                                {`${classe.className}`}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </PerfectScrollbar>
                  <TablePagination
                    component="div"
                    count={classes.length}
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
                          md={8}
                          xs={12}
                        >
                          <TextField
                            fullWidth
                            label="Class Name"
                            name="className"
                            onChange={handleChange}
                            required
                            value={values.className}
                            variant="outlined"
                          />
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
                        Add Class
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

export default AddClass;
