import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAlert, positions } from 'react-alert';
import { useNavigate } from 'react-router-dom';
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
  const alert = useAlert();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    mark: 0,
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
    const subjectRecord = JSON.parse(localStorage.getItem('subjectRecord'));
    // var
    // if(values.mark<)
    const data = {
      firstName: studentRecord.name,
      surname: studentRecord.surname,
      studentId: studentRecord.studentId,
      subjectCode: subjectRecord.subjectCode,
      subject: subjectRecord.SubjectName,
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
          mark: 0,
          comment: ''
        });

        alert.info(response.message, { position: positions.MIDDLE }, {
          timeout: 2000,
          onOpen: () => {
            console.log(response);
          },
          onClose: () => {
            navigate('/teacher/report/', { replace: true });
          }
        });
      }).catch((error) => {
        alert.info('Snap, an error occured. Please try again later.', { position: positions.MIDDLE }, {
          timeout: 2000,
          onOpen: () => {
            console.log(error);
          },
          onClose: () => {
            navigate('/teacher/report/', { replace: true });
          }
        });
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
