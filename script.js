let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return (title + author + "," + pages + read);
  }
}

// Function for adding a new book to the array
function addBookToLibrary() {
  // do stuff here
}

const theHobbit = new Book("The Hobbit", " by me", "3", " no")
console.log(theHobbit.info());