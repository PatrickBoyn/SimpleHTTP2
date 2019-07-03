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
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    return responseData;
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
