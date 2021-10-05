import { useState } from 'react';

import {
  Box, Grid,
  Card,
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

import SchoolAdminServices from '../../services/schoolAdmin';

const AddSubjectForm = () => {
  const [level, setLevel] = useState('');

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

  const handleSubmit = () => {
    const a = Math.floor(100000 + Math.random() * 900000);
    const subjectCodeRef = `SUB${String(a).substring(0, 3)}`;
    const data = {
      level,
      subjectName: values.subjectName,
      subjectCode: subjectCodeRef
    };

    SchoolAdminServices.postSubject(data)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
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
    </>
  );
};

export default AddSubjectForm;
