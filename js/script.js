const lib = document.getElementById('library');
let books = JSON.parse(localStorage.getItem('bookCollection')) || [];
createObjects(books)
document.querySelector('.add-book').addEventListener('submit', (e)=>{
    e.preventDefault();
   
    let object = {
        title: '',
        author: ''
    }
    const title =  document.querySelector('.title').value;
   const author = document.querySelector('.author').value;
   if (title === '' || author=== ''){
    return;
   }
   object.title = title
   object.author = author
    books.push(object)
    createObjects(books)
    localStorage.setItem('bookCollection', JSON.stringify(books));
   document.querySelector('.title').value = '';
   document.querySelector('.author').value = ''; 
});

function createObjects(arr){
    lib.innerHTML = '';
    let i = 0;
    arr.forEach((element)=>{
        const wrapper = document.createElement('div');
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const removeButton = document.createElement('button');
        const horizontalLine = document.createElement('hr');

        removeButton.classList.add('delete-button')
        removeButton.setAttribute('data', i);
        removeButton.addEventListener('click', deleteBook);
        i++

        lib.appendChild(wrapper);
        wrapper.appendChild(bookTitle);
        wrapper.appendChild(bookAuthor);
        wrapper.appendChild(removeButton);
        wrapper.append(horizontalLine);

        bookTitle.innerHTML = element.title;
        bookAuthor.innerHTML = element.author;
        removeButton.innerHTML = 'Remove'

        
    })
}


const deletebutton = document.querySelectorAll('.delete-button');

function deleteBook(evt){
    books.splice(evt.currentTarget.getAttribute('data'), 1);
    createObjects(books);
    localStorage.setItem('bookCollection', JSON.stringify(books));

}
