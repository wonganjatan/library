const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const title = prompt("Title?")
    const author = prompt("Author?")
    const pages = prompt("Number of Page?")
    const read = confirm("Have you read it?")

    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

addBookToLibrary()

myLibrary.forEach(book => {
    console.log(book)
});