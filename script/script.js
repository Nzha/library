const statusBtns = document.querySelectorAll('.status');
const deleteBtns = document.querySelectorAll('.delete');

statusBtns.forEach(statusBtn => statusBtn.addEventListener('click', changeStatus))
deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeBook));

function changeStatus(e) {
    if (e.currentTarget.classList.contains('not-read')) {
        e.currentTarget.classList.remove('not-read');
        e.currentTarget.classList.add('read');
    } else {
        e.currentTarget.classList.remove('read');
        e.currentTarget.classList.add('not-read');
    }
}

function removeBook(e) {
    e.currentTarget.parentElement.remove();
}