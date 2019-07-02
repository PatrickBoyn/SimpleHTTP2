const http = new SimpleHTTP();
const employee = {
  id: 4,
  firstName: 'John',
  lastName: 'Doe',
  gender: 'Male',
  dateOfBirth: '1981-01-13',
  phoneNumber: '1-555-5555',
  email: 'test@gmail.com'
};
// Get all employees
// http
//   .get('http://localhost:5000/api/employee')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// Get single employee
// http
//   .get('http://localhost:5000/api/employee/1')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
