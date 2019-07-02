const http = new SimpleHTTP();
// const employee = {
//   id: 6,
//   firstName: 'Sarah',
//   lastName: 'Michaels',
//   gender: 'Female',
//   dateOfBirth: '1988-05-25',
//   phoneNumber: '1-555-5555',
//   email: 'spacehappy@gmail.com'
// };
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
