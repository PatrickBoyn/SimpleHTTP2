class SimpleHTTP {
  get(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);
  }
}
