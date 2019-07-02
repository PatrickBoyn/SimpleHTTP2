class SimpleHTTP {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
    });
  }
}
