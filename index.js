function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
    return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then(json => renderBooks(json))
  }
  fetchBooks()



function renderBooks() {
  const main = document.querySelector('main');

}
