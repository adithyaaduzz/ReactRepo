
import React, { useState } from "react";
import "./App.css";

function App() {

    const [books, setBooks] = useState([
        { id: 1, name: "The Alchemist", author: "Paulo Coelho", date: "1988-01-01" },
        { id: 2, name: "Harry Potter", author: "J.K. Rowling", date: "1997-06-26" },
        { id: 3, name: "Wings of Fire", author: "A.P.J. Abdul Kalam", date: "1999-01-01" }
    ]);

    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [search, setSearch] = useState("");

    const [editingId, setEditingId] = useState(null);
    const [editedName, setEditedName] = useState("");

    // Add Book
    const addBook = () => {

        if (bookName.trim() === "" || authorName.trim() === "" || publishDate === "") {
            alert("Please fill all fields");
            return;
        }

        const newBook = {
            id: books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1,
            name: bookName,
            author: authorName,
            date: publishDate
        };

        setBooks([...books, newBook]);

        setBookName("");
        setAuthorName("");
        setPublishDate("");
    };

    // Delete Book
    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    // Edit Book
    const editBook = (book) => {
        setEditingId(book.id);
        setEditedName(book.name);
    };

    // Save Edited Book
    const saveBook = (id) => {

        if (editedName.trim() === "") {
            alert("Book name cannot be empty");
            return;
        }

        setBooks(
            books.map(book =>
                book.id === id
                    ? { ...book, name: editedName }
                    : book
            )
        );

        setEditingId(null);
        setEditedName("");
    };

    // Cancel Editing
    const cancelEdit = () => {
        setEditingId(null);
        setEditedName("");
    };

    // Search Books
    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">

            <h1>Book List Management</h1>

            {/* Add Book Form */}
            <div className="form">

                <input
                    type="text"
                    placeholder="Book Name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Author Name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                />

                <input
                    type="date"
                    value={publishDate}
                    onChange={(e) => setPublishDate(e.target.value)}
                />

                <button onClick={addBook}>Add Book</button>

            </div>

            {/* Search */}
            <input
                className="search"
                type="text"
                placeholder="Search by book or author..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Book Table */}
            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Publish Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {filteredBooks.length === 0 ? (

                        <tr>
                            <td colSpan="5">No books found</td>
                        </tr>

                    ) : (

                        filteredBooks.map(book => (

                            <tr key={book.id}>

                                <td>{book.id}</td>

                                <td>
                                    {editingId === book.id ? (
                                        <input
                                            type="text"
                                            value={editedName}
                                            onChange={(e) => setEditedName(e.target.value)}
                                        />
                                    ) : (
                                        book.name
                                    )}
                                </td>

                                <td>{book.author}</td>

                                <td>{book.date}</td>

                                <td>

                                    {editingId === book.id ? (

                                        <>
                                            <button onClick={() => saveBook(book.id)}>
                                                Save
                                            </button>

                                            <button onClick={cancelEdit}>
                                                Cancel
                                            </button>
                                        </>

                                    ) : (

                                        <>
                                            <button onClick={() => editBook(book)}>
                                                Edit
                                            </button>

                                            <button onClick={() => deleteBook(book.id)}>
                                                Delete
                                            </button>
                                        </>

                                    )}

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default App;
