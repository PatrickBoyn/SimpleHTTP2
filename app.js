const http = new SimpleHTTP();

// Get all employees
// http
//   .get('http://localhost:5000/api/employee')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// Get single employee
http
  .get('http://localhost:5000/api/employee/1')
  .then(data => console.log(data))
  .catch(error => console.log(error));
