function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Convert response to JSON
      return response.json();
    })
    .then(data => {
      // Call renderBooks() function with the JSON data
      renderBooks(data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Error fetching books:', error);
    });
}

// Function to render the fetched books
function renderBooks(books) {
  // Assuming there is a DOM element with id 'bookList' to display the books
  const bookList = document.getElementById('bookList');
  
  // Clear any existing content
  bookList.innerHTML = '';

  // Loop through the books and create list items to display their titles
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; // Assuming 'name' property contains the title
    bookList.appendChild(listItem);
  });
}

// Call fetchBooks() when index.html is loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// Export fetchBooks() so tests can access it
module.exports = fetchBooks;
