class SimpleHTTP {
  // HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();

    return responseData;
  }
  // HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    return responseData;
  }
  // HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(resolve => resolve.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  // HTTP DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => resolve('Resouce deleted....'))
        .catch(error => reject(error));
    });
  }
}
