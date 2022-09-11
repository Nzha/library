const statusBtns = document.querySelectorAll('.status');
const deleteBtns = document.querySelectorAll('.delete');

statusBtns.forEach(statusBtn => statusBtn.addEventListener('click', changeStatus))
deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeBook));

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