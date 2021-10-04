import axios from 'axios';

const qs = require('qs');

// const apiUrl = 'http://localhost:3001/api';
const apiUrl = 'https://westminster-backend.herokuapp.com/api';

// const token = JSON.parse(localStorage.getItem('token'));

const config = {
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // Authorization: `Bearer ${token}`,
    // 'Access-Control-Allow-Origin': 'https://pawacyberschool.net',
    // 'Access-Control-Allow-Credentials': true,
  },
};

// Register New User
async function register(data) {
  try {
    const res = await axios.post(
      `${apiUrl}/register`,
      qs.stringify(data),
      config
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// Register New User
async function login(data) {
  try {
    const res = await axios.post(`${apiUrl}/login`, qs.stringify(data), config);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function profile() {
  try {
    const res = await axios.get('/profile', config);
    return res;
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function changePassword(data) {
  try {
    const res = await axios.put('/changepw', qs.stringify(data), config);
    return res;
  } catch (err) {
    console.error(err);
    return err;
  }
}

const AuthService = {
  register,
  login,
  profile,
  changePassword,
};

export default AuthService;
