const http = new SimpleHTTP();

http
  .get('http://localhost:5000/api/employee')
  .then(data => console.log(data))
  .catch(error => console.log(error));
