class Book {
	constructor(title, author, isbn) {
		this.title = title
		this.author = author
		this.isbn = isbn
	}
}

const defaultBooks = [
	{
		title: 'Book 1',
		author: 'Brad Traversy',
		isbn: '12345'
	},
	{
		title: 'Book 2',
		author: 'Mehul Mohan',
		isbn: '6789'
	}
]

// UI Class: Handle UI Tasks
class UI {
	static displayBooks() {
		defaultBooks.forEach((book) => UI.addBookToList(book))
	}

	static addBookToList(book) {
		const list = document.getElementById('book-list')

		const row = document.createElement('tr')

		row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

		list.appendChild(row)
	}


    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
      }


      static deleteBook(target) {

     
        if(target.classList.contains('delete')) {
            // we clicked the X icon
            target.parentElement.parentElement.remove();
		
         }
 
    }
        

	static showAlert(message, className) {
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		
		
		const container = document.querySelector('.container');
		const form = document.querySelector('#book-form');
		container.insertBefore(div, form);
         
}

}


// Event: Display Books
UI.displayBooks()

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

	// Get Form Values
	const author = document.getElementById('author').value
	const title = document.getElementById('title').value
	const isbn = document.getElementById('isbn').value

	// Instantiate a new Book object
	const book = new Book(title, author, isbn)

	// Add book object to UI
	UI.addBookToList(book)

   // Show success message
   UI.showAlert('Book Added', 'success');
 
    // clearFields
    UI.clearFields()
    
});

	   // Event: Remove a Book
       document.getElementById('book-list').addEventListener('click', (e) => {

	   // Event: Remove a Book
        UI.deleteBook(e.target) ;
        // Show success message
		UI.showAlert('Book Removed', 'danger'); 
		

 
		
});