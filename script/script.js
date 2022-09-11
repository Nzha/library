const title = document.querySelector('#title');
const author = document.querySelector('#author');
const status = document.querySelector('#status');
const addBookBtn = document.querySelector('#add-book-btn');
const bookContainer = document.querySelector('.book-container');
const bookDiv = document.querySelector('.book');
const statusBtns = document.querySelectorAll('.status');
const deleteBtns = document.querySelectorAll('.delete');

let myLibrary = [];

addBookBtn.addEventListener('click', addBook);
statusBtns.forEach(statusBtn => statusBtn.addEventListener('click', changeStatus))
deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeBook));

function Book(title, author) {
    this.title = title
    this.author = author
    // this.read = true
}

function addBook(e) {
    e.preventDefault();
    
    const book = new Book(title.value, author.value);

    myLibrary.push(book);

    const newBook = document.createElement('div');
    newBook.classList.add('book');
    bookContainer.appendChild(newBook);

    // const newTitle = document.createElement('div');
    // newTitle.classList.add('title');
    // newTitle.textContent = book.title;
    // newBook.appendChild(newTitle);

    // const newAuthor = document.createElement('div');
    // newAuthor.classList.add('author');
    // newAuthor.textContent = book.author;
    // newBook.appendChild(newAuthor);

    // const newStatusBtn = document.createElement('button');
    // newStatusBtn.classList.add('status');
    // newStatusBtn.textContent = 'status';
    // newBook.appendChild(newStatusBtn);

    // const newDeleteBtn = document.createElement('button');
    // newDeleteBtn.classList.add('delete');
    // newDeleteBtn.textContent = 'Delete';
    // newBook.appendChild(newDeleteBtn);



    const test = bookDiv.childElementCount;
    const test2 = ['title', 'author'];
    const test3 = ['status', 'delete']

    for (let i = 0; i < 2; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`${test2[i]}`);
        newDiv.textContent = book[test2[i]];
        newBook.appendChild(newDiv);
    }

    for (let i = 0; i < 2; i++) {
        const newBtn = document.createElement('button');
        newBtn.classList.add(`${test3[i]}`);
        newBtn.textContent = test3[i];
        newBook.appendChild(newBtn);
    }



    console.log(myLibrary);
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