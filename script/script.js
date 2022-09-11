const deleteBtns = document.querySelectorAll('.delete');

deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', removeBook));

function removeBook(e) {
    e.currentTarget.parentElement.remove();
}