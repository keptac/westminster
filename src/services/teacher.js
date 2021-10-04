import axios from 'axios';
import qs from 'qs';
// Submissions
async function postStudentMarks(data) {
  const config = {
    baseURL: 'http://localhost:3001/api/westminster',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const res = await axios.post('/studentMarks', qs.stringify(data), config);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function getStudentsPerClass(classId) {
  const config = {
    method: 'get',
    url: `http://localhost:3001/api/westminster/students/class/${classId}`,
    headers: { }
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

async function getStudentMarksPerClass(teacherId) {
  const config = {
    method: 'get',
    url: `http://localhost:3001/api/westminster/studentMarks/class/${teacherId}`,
    headers: { }
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

async function getTeacherClasses(teacherId) {
  const config = {
    method: 'get',
    url: `http://localhost:3001/api/westminster/teacherClasses/teacher/${teacherId}`,
    headers: { }
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

async function addTeacherClass(data) {
  const config = {
    baseURL: 'http://localhost:3001/api/westminster',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const res = await axios.post('/teacherClasses', qs.stringify(data), config);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

const TeacherServices = {
  postStudentMarks,
  getStudentsPerClass,
  getStudentMarksPerClass,
  addTeacherClass,
  getTeacherClasses
};

export default TeacherServices;
