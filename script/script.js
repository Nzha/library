const title = document.querySelector('#title');
const author = document.querySelector('#author');
const checkboxRead = document.querySelector('#checkbox-read');
const addBookForm = document.querySelector('#add-book');
const addBookBtn = document.querySelector('#add-book-btn');
const bookContainer = document.querySelector('.book-container');
const bookDiv = document.querySelector('.book');

let myLibrary = [];
let bookId = 0;

document.addEventListener('DOMContentLoaded', queryBtns);
checkboxRead.addEventListener('change', colorReadText);
addBookBtn.addEventListener('click', addBook);

function Book(title, author) {
    this.id = 0
    this.title = title
    this.author = author
    this.read = false
}

function addBook(e) {
    const book = new Book(title.value, author.value);

    e.preventDefault();

    book.id = bookId;
    bookId++;
    myLibrary.push(book);

    createBookCard(book);
    queryBtns();
    addBookForm.reset();
    console.log(myLibrary);
}

function createBookCard(book) {
    // Create a 'book' div
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.setAttribute('id', `${bookId - 1}`)
    bookContainer.appendChild(newBook);

    const bookElements = ['title', 'author', 'status', 'delete'];

    // Add title, author, and buttons to 'book' div
    for (let i = 0; i < bookElements.length; i++) {
        if (bookElements[i] === 'title' || bookElements[i] === 'author') {
            const newDiv = document.createElement('div');
            newDiv.textContent = book[bookElements[i]];
            newDiv.classList.add(`${bookElements[i]}`);
            newBook.appendChild(newDiv);
        } else {
            const newBtn = document.createElement('button');
            if (bookElements[i] === 'status') {
                if (checkboxRead.checked) {
                    newBtn.textContent = 'Read';
                    newBtn.classList.add('read');
                    book.read = true;
                } else {
                    newBtn.textContent = 'Not read';
                }
            } else {
                newBtn.textContent = 'Delete';
            }
            newBtn.classList.add(`${bookElements[i]}`);
            newBook.appendChild(newBtn);
        }
    }    
}

// Query buttons and attach an event listener to each
function queryBtns() {
    const statusBtns = document.querySelectorAll('.status');
    const deleteBtns = document.querySelectorAll('.delete');
    statusBtns.forEach(statusBtn => statusBtn.addEventListener('click', changeReadStatus))
    deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeBook));
}

function changeReadStatus(e) {
    e.target.classList.toggle('read');
    if (e.target.classList.contains('read')) {
        e.target.textContent = 'Read';
    } else {
        e.target.textContent = 'Not read';
    }
}

function removeBook(e) {
    const indexOfObject = myLibrary.findIndex(object => {
        return object.id == e.target.parentElement.id;
    });
    myLibrary.splice(indexOfObject, 1);

    e.target.parentElement.remove();
    console.log(myLibrary);
}

function colorReadText() {
    const readText = document.querySelector('#read');

    if (checkboxRead.checked) {
        readText.style.color = '#f2f3f7';
    } else {
        readText.style.color = '#757575';
    }
}