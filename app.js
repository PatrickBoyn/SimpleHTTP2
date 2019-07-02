const http = new SimpleHTTP();
const employee = {
  id: 8,
  firstName: 'Jennifer',
  lastName: 'White',
  gender: 'Female',
  dateOfBirth: '1993-08-06',
  phoneNumber: '1-555-5555',
  email: 'test2@gmail.com'
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

// Post an employee record
// http
//   .post('http://localhost:5000/api/employee/new', employee)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// Update an employee record
http
  .put(`http://localhost:5000/api/employee/update/${employee.id}`, employee)
  .then(data => console.log(data))
  .catch(error => console.log(error));
