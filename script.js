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
    myLibrary.forEach((book, index) => {
    const card = document.createElement("div")
    card.classList.add("book-card")
    card.textContent = `${book.title} by ${book.author}, ${book.pages} pages`

    const toggleRead = document.createElement("div")


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