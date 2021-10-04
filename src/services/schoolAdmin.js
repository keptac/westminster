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

async function getAllClasses() {
  const config = {
    method: 'get',
    url: 'http://localhost:3001/api/westminster/class',
    headers: { }
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

async function getAllSubjects() {
  const config = {
    method: 'get',
    url: 'http://localhost:3001/api/westminster/subjects',
    headers: { }
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

const AdminServices = {
  postStudentMarks,
  getAllClasses,
  getAllSubjects
};

export default AdminServices;
