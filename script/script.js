const statusBtns = document.querySelectorAll('.status');
const deleteBtns = document.querySelectorAll('.delete');

statusBtns.forEach(statusBtn => statusBtn.addEventListener('click', changeStatus))
deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeBook));

function changeStatus(e) {
    e.currentTarget.classList.toggle('read');
}

function removeBook(e) {
    e.currentTarget.parentElement.remove();
}