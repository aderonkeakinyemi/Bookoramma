//delete books
const list = document.querySelector('#book-list ul');

list.addEventListener('click', event => {

    //check if what is clicked is the delete button
    if(event.target.className === 'delete'){

        //  grab li parent element of the clicked delete button and delete it
        const li = event.target.parentElement;
        list.removeChild(li);
        
    }
})


// add book-list 
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', event => {
    event.preventDefault();
    
    let value = addForm.querySelector('input[type="text"]').value;
    // create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    
    //add text content or innerhtml
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;
    
    // add css classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    
    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
   addForm.reset();
})



// search Books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', event => {
    const term = event.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(book => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) !== -1){
      book.style.display = 'block'
        } else { 
            book.style.display = 'none';
 }
    });
})
    

