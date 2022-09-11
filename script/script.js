const title = document.querySelector('#title');
const author = document.querySelector('#author');
const status = document.querySelector('#status');
const addBookBtn = document.querySelector('#add-book-btn');
const bookContainer = document.querySelector('.book-container');
const book = document.querySelector('.book');
const statusBtns = document.querySelectorAll('.status');
const deleteBtns = document.querySelectorAll('.delete');

addBookBtn.addEventListener('click', addBook);
statusBtns.forEach(statusBtn => statusBtn.addEventListener('click', changeStatus))
deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeBook));

function Book(title, author, read) {
    this.title = title
    this.author = author
    // this.read = true
}

function addBook() {
    console.log(title.value);
    
    // const test = new Book(book.value, author.value);
    // console.log(test);

    const newBook = document.createElement('div');
    newBook.classList.add('book');
    bookContainer.appendChild(newBook);

    const newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.textContent = test.title;
    newBook.appendChild(newTitle);
}

function changeStatus(e) {
    e.target.classList.toggle('read');
    if (e.target.classList.contains('read')) {
        e.target.textContent = 'Read';
    } else {
        e.target.textContent = 'Not read';
    }
    console.log(book.value);
}

function removeBook(e) {
    e.target.parentElement.remove();
}