const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)

    console.log(myLibrary)

    displayBooks()
}

function displayBooks() {
    const library = document.querySelector(".library")
    library.textContent = ""
    myLibrary.forEach((book, index) => {
    const card = document.createElement("div")
    card.classList.add("book-card")

    const bookTitle = document.createElement("p")
    bookTitle.classList.add("book-title")
    bookTitle.textContent = `Title: ${book.title}`
    const bookAuthor = document.createElement("p")
    bookAuthor.classList.add("book-author")
    bookAuthor.textContent = `Author: ${book.author}`
    const bookPages = document.createElement("p")
    bookPages.classList.add("book-pages")
    bookPages.textContent = `Pages: ${book.pages}`

    card.appendChild(bookTitle)
    card.appendChild(bookAuthor)
    card.appendChild(bookPages)

    library.appendChild(card)
})
}

const form = document.querySelector("#book-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const read = document.querySelector("#read").checked

    addBookToLibrary(title, author, pages, read)
})