// Example Data (Replace with dynamic data later)
const books = [
    { title: "The Great Gatsby", category: "Fiction", borrowed: false, cover: "https://via.placeholder.com/100x150" },
    { title: "1984", category: "Science Fiction", borrowed: true, cover: "https://via.placeholder.com/100x150" },
    { title: "To Kill a Mockingbird", category: "Fiction", borrowed: false, cover: "https://via.placeholder.com/100x150" },
    { title: "The Catcher in the Rye", category: "Classics", borrowed: true, cover: "https://via.placeholder.com/100x150" },
];

const categories = ["Fiction", "Science Fiction", "Classics", "Non-Fiction"];

// Populate Categories
const categoryList = document.getElementById("category-list");
categories.forEach(category => {
    const li = document.createElement("li");
    li.textContent = category;
    li.addEventListener('click', () => filterByCategory(category));
    categoryList.appendChild(li);
});

// Populate Books with Covers
const bookList = document.getElementById("book-list");
books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book-item";
    
    const img = document.createElement("img");
    img.src = book.cover;
    div.appendChild(img);
    
    const h3 = document.createElement("h3");
    h3.textContent = book.title;
    div.appendChild(h3);
    
    bookList.appendChild(div);
});

// Borrowing History
const historyList = document.getElementById("history-list");
books.filter(book => book.borrowed).forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title} (Borrowed)`;
    historyList.appendChild(li);
});

// Search Functionality
function searchBook() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));

    // Clear current list
    bookList.innerHTML = '';

    // Populate with filtered books
    filteredBooks.forEach(book => {
        const div = document.createElement("div");
        div.className = "book-item";
        
        const img = document.createElement("img");
        img.src = book.cover;
        div.appendChild(img);
        
        const h3 = document.createElement("h3");
        h3.textContent = book.title;
        div.appendChild(h3);
        
        bookList.appendChild(div);
    });
}

// Filter by Category
function filterByCategory(category) {
    const filteredBooks = books.filter(book => book.category === category);

    // Clear current list
    bookList.innerHTML = '';

    // Populate with filtered books
    filteredBooks.forEach(book => {
        const div = document.createElement("div");
        div.className = "book-item";
        
        const img = document.createElement("img");
        img.src = book.cover;
        div.appendChild(img);
        
        const h3 = document.createElement("h3");
        h3.textContent = book.title;
        div.appendChild(h3);
        
        bookList.appendChild(div);
    });
}
