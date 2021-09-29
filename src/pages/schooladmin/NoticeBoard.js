/* eslint-disable prefer-const */
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

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

import not from 'src/__mocks__/notices';
import PerfectScrollbar from 'react-perfect-scrollbar';

const AddNotice = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [notices, setNotice] = useState(not);

  const [values, setValues] = useState({
    noticeBody: null,
    noticeTitle: null,
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
    notices.push({
      id: uuid(),
      noticeBody: values.noticeBody,
      noticeTitle: values.noticeTitle,
      imageUrl: '/static/images/resources/westminster.png',
      updatedAt: moment(),
    });

    setNotice(notices);

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
                              Notice Title
                            </TableCell>
                            <TableCell>
                              Notice Message
                            </TableCell>
                            <TableCell>
                              Notice Date
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {notices.slice(0, limit).map((notice) => (
                            <TableRow
                              hover
                              key={notice.id}
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
                                    {`${notice.noticeTitle}` }
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell>
                                {`${notice.noticeBody}`}
                              </TableCell>
                              <TableCell>
                                {`${notice.updatedAt}`}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </PerfectScrollbar>
                  <TablePagination
                    component="div"
                    count={notices.length}
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
                      title="Add New Notice"
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
                            label="Notice Title"
                            name="noticeTitle"
                            onChange={handleChange}
                            required
                            value={values.noticeTitle}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid
                          item
                          md={12}
                          xs={12}
                        >
                          <TextField
                            fullWidth
                            label="Message"
                            name="noticeBody"
                            onChange={handleChange}
                            multiline="true"
                            required
                            value={values.noticeBody}
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
                        Add Notice
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

export default AddNotice;
