import axios from 'axios';
import qs from 'qs';
// Submissions
async function postClasses(data) {
  const config = {
    baseURL: 'https://westminster-backend.herokuapp.com/api/westminster',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const res = await axios.post('/class', qs.stringify(data), config);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function postNewStudent(data) {
  const config = {
    baseURL: 'https://westminster-backend.herokuapp.com/api/westminster',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const res = await axios.post('/students', qs.stringify(data), config);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function getAllStudents() {
  const config = {
    method: 'get',
    url: 'https://westminster-backend.herokuapp.com/api/westminster/students',
    headers: { }
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

async function postSubject(data) {
  const config = {
    baseURL: 'https://westminster-backend.herokuapp.com/api/westminster',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const res = await axios.post('/subjects', qs.stringify(data), config);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function getAllClasses() {
  const config = {
    method: 'get',
    url: 'https://westminster-backend.herokuapp.com/api/westminster/class',
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
    url: 'https://westminster-backend.herokuapp.com/api/westminster/subjects',
    headers: { }
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

async function getAllTeachers() {
  const config = {
    method: 'get',
    url: 'https://westminster-backend.herokuapp.com/api/westminster/staffType/Teacher',
    headers: { }
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

async function getAllNotices() {
  const config = {
    method: 'get',
    url: 'https://westminster-backend.herokuapp.com/api/westminster/announcements',
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
  postClasses,
  getAllClasses,
  getAllSubjects,
  getAllTeachers,
  getAllNotices,
  postSubject,
  postNewStudent,
  getAllStudents
};

export default AdminServices;
