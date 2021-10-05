import { useState } from 'react';

import {
  Box, Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Button
} from '@material-ui/core';
import AdminServices from 'src/services/schoolAdmin';

const AddNoticeForm = () => {
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

  const handleSubmit = () => {
    const data = {
      noticeBody: values.noticeBody,
      noticeTitle: values.noticeTitle,
    };

    AdminServices.postAnnouncement(data)
      .then((response) => {
        console.log(response); // Add alert
      }).catch((error) => {
        console.log(error);
      });
    // Pass to api
  };

  return (
    <>
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
    </>
  );
};

export default AddNoticeForm;
