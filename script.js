const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    
}

const form = document.querySelector("#book-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const read = document.querySelector("#read").value

    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)

    console.log(myLibrary)
})