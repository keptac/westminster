import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

import TeacherServices from 'src/services/teacher';

const MarksForm = ({ studentName }, props) => {
  const [values, setValues] = useState({
    mark: null,
    comment: '',
  });

  const handleChange = (event) => {
    if (event.target.name === 'mark' && event.target.value < 20) {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
        comment: 'Put more effort'
      });
    } else {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
        comment: ''
      });
    }
  };

  const handleSubmit = () => {
    const studentRecord = JSON.parse(localStorage.getItem('studentRecord'));
    const data = {
      firstName: studentRecord.name,
      surname: studentRecord.surname,
      studentId: studentRecord.studentId,
      subjectCode: 'SUB001',
      subject: 'Subject Test',
      classId: studentRecord.classId,
      mark: values.mark,
      grade: 'B',
      comment: values.comment
    };
    // Pass to api
    TeacherServices.postStudentMarks(data)
      .then((response) => {
        console.log(response);
        localStorage.removeItem(studentRecord);
        setValues({
          ...values,
          mark: null,
          comment: ''
        });
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          title={`Upload assessment marks for ${studentName}`}
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
              <TextField
                fullWidth
                label="Subject Mark"
                name="mark"
                onChange={handleChange}
                type="number"
                value={values.mark}
                required
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
                label="Teacher's Comment"
                name="comment"
                onChange={handleChange}
                required
                value={values.comment}
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
            Save Marks
          </Button>
        </Box>
      </Card>
    </form>
  );
};

MarksForm.propTypes = {
  studentName: PropTypes.any.isRequired
};

export default MarksForm;
