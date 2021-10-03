import axios from 'axios';

const qs = require('qs');

// Submissions
async function submitAssignment(data) {
  const token = await JSON.parse(localStorage.getItem('token'));
  const config = {
    baseURL: 'http://localhost:3001/api/teacher',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': 'https://pawacyberschool.net',
      'Access-Control-Allow-Credentials': true,
    },
  };
  try {
    const res = await axios.post('/new_submission', qs.stringify(data), config);
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

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}

async function getStudentMarksPerClass(classId) {
  const config = {
    method: 'get',
    url: `http://localhost:3001/api/westminster/studentMarks/class/${classId}`,
    headers: { }
  };

  axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

const TeacherServices = {
  submitAssignment,
  getStudentsPerClass,
  getStudentMarksPerClass
};

export default TeacherServices;
