/* eslint-disable import/no-mutable-exports */
import TeacherServices from 'src/services/teacher';

let students = [];

TeacherServices.getStudentsPerClass('CLC001') // Get all subjects for student
  .then((response) => {
    // console.log(response);
    students = response;
  });

export default students;

// export default [
//   {
//     name: 'Kelvin',
//     surname: 'Chelenje',
//     studentId: 'STUD001',
//     classId: 'CLC120',
//     dob: '03/01/2015',
//     phoneNumber: '0785302628',
//     emailAddress: 'keptac.dev@gmail.com'
//   }
// ];
