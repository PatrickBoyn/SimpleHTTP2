const http = new SimpleHTTP();
const employee = {
  id: 13,
  firstName: 'George',
  lastName: 'Cypher',
  gender: 'Male',
  dateOfBirth: '1987-01-01',
  phoneNumber: '1-555-5555',
  email: 'funtimes@gmail.com'
};
// This is a test file to see if the various operations work.
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
// http
//   .put(`http://localhost:5000/api/employee/update/${employee.id}`, employee)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// Delete an employee record
// http
//   .delete('http://localhost:5000/api/employee/delete/12')
//   .then(data => console.log(data).catch(error => console.log(error)));
