const title = document.querySelector('#title');
const author = document.querySelector('#author');
const status = document.querySelector('#status');
const addBookForm = document.querySelector('#add-book');
const addBookBtn = document.querySelector('#add-book-btn');
const bookContainer = document.querySelector('.book-container');
const bookDiv = document.querySelector('.book');

let myLibrary = [];

document.addEventListener('DOMContentLoaded', queryBtns);
addBookBtn.addEventListener('click', addBook);

function updateStatusBtns() {
    const statusBtns = document.querySelectorAll('.status');
    statusBtns.forEach(statusBtn => statusBtn.addEventListener('click', changeStatus))
}

function Book(title, author) {
    this.title = title
    this.author = author
    // this.read = true
}

function addBook(e) {
    e.preventDefault();
    
    const book = new Book(title.value, author.value);

    myLibrary.push(book);

    // Create a 'book' div
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    bookContainer.appendChild(newBook);

    const bookElements = ['title', 'author', 'status', 'delete'];

    // Add 'book' child elements to 'book' div
    for (let i = 0; i < bookElements.length; i++) {
        if (bookElements[i] === 'title' || bookElements[i] === 'author') {
            const newDiv = document.createElement('div');
            newDiv.textContent = book[bookElements[i]];
            newDiv.classList.add(`${bookElements[i]}`);
            newBook.appendChild(newDiv);
        } else {
            const newBtn = document.createElement('button');
            newBtn.textContent = bookElements[i];
            newBtn.classList.add(`${bookElements[i]}`);
            newBook.appendChild(newBtn);
        }
    }

    addBookForm.reset();
    queryBtns();
    console.log(myLibrary);
}

// Query buttons and attach an event listener to each
function queryBtns() {
    const statusBtns = document.querySelectorAll('.status');
    const deleteBtns = document.querySelectorAll('.delete');
    statusBtns.forEach(statusBtn => statusBtn.addEventListener('click', changeStatus))
    deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeBook));
}

function changeStatus(e) {
    e.target.classList.toggle('read');
    if (e.target.classList.contains('read')) {
        e.target.textContent = 'Read';
    } else {
        e.target.textContent = 'Not read';
    }
}

function removeBook(e) {
    e.target.parentElement.remove();
}