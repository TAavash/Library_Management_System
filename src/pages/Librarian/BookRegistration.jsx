import React, { useState } from "react";
import BookCover from "../../assets/th (1).jpeg";
import { IoArrowBackCircle, IoPersonAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function BookRegistration() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    sub_title: "",
    description: "",
    genre: "",
    status: "",
    number_of_pages: "",
    language: "",
    publication_date: "",
    edition: "",
    publication_name: "",
    name_of_publisher: "",
    place_of_publication: "",
    isbn_number: "",
    classification_number: "",
    book_number: "",
    scanner_type: "",
    barcode_number: "",
    book_location: "",
  });

  const [bookCover, setBookCover] = useState(BookCover);
  const [authors, setAuthors] = useState([{ id: 1, name: "" }]);

  const handleInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const requiredFields = [
      "title",
      "isbn_number",
      "classification_number",
      "book_number",
    ];

    for (const field of requiredFields) {
      if (!book[field]) {
        toast.error(`Please fill in the ${field.replace("_", " ")} field.`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    try {
      const authorResponses = await Promise.all(
        authors.map((author) =>
          fetch("http://127.0.0.1:8000/api/Author/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: author.name }),
          }).then((res) => res.json())
        )
      );

      const publicationResponse = await fetch("http://127.0.0.1:8000/api/publications/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          published_year: book.publication_date,

          publication_name: book.publication_name,
          name_of_publisher: book.name_of_publisher,
          place_of_publication: book.place_of_publication,
        }),
      }).then((res) => res.json());

      const isbnResponse = await fetch("http://127.0.0.1:8000/api/ISBN/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isbn_number: book.isbn_number }),
      }).then((res) => res.json());

      const bookResponse = await fetch("http://127.0.0.1:8000/api/book/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...book,
          authors_idS: authorResponses.map((author) => author.id),
          publications_idS: publicationResponse.id,
          isbn_idS: isbnResponse.id,
        }),
      }).then((res) => res.json());

      if (bookResponse.id) {
        toast.success("Register successful!");
        setTimeout(() => navigate(`/LibraryRequestPage`), 2000); // Redirect after 2 seconds
      } else {
        toast.error(bookResponse.message || "Register failed. Please check your credentials.");
        console.log(bookResponse.message);
      }
    } catch (error) {
      console.error("An error occurred:", error); // Log the error for debugging
      toast.error("An error occurred. Please try again later.");
    }
  };


  const handleBackIconClick = () => {
    navigate("/librarian-books");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBookCover(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addAuthorField = () => {
    setAuthors([...authors, { id: authors.length + 1, name: "" }]);
  };

  const handleAuthorInputChange = (id, value) => {
    const updatedAuthors = authors.map((author) =>
      author.id === id ? { ...author, name: value } : author
    );
    setAuthors(updatedAuthors);
  };

  return (
    <div className="flex w-full p-3 gap-2">
      <div className="w-2/3 flex flex-col">
        <div className="flex justify-around">
          <div>
            <IoArrowBackCircle
              className="h-14 w-14 cursor-pointer"
              onClick={handleBackIconClick}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Add Book</h2>
            <p className="text-slate-500">Book Registration Form</p>
          </div>
        </div>
        <div className="ml-36 mt-10">
          <form onSubmit={handleSubmit}>
            <h3 className="text-slate-400 mt-6">TITLE</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="After Dark"
                value={book.title}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="sub_title">Sub Title</label>
              <input
                type="text"
                name="sub_title"
                id="sub_title"
                placeholder="Arise Dawn"
                value={book.sub_title}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                value={book.description}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>

            <h3 className="text-slate-400 mt-6">TYPE</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="genre">Genre</label>
              <select
                name="genre"
                id="genre"
                value={book.genre}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              >
                <option value="">Select Genere</option>
                <option value="BSc">BSc</option>
                <option value="BBA">BBA</option>
                <option value="ACCA">ACCA</option>
              </select>
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                value={book.status}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              >
                <option value="">Select Status</option>
                <option value="New">New</option>
                <option value="Old">Old</option>
                <option value="Used">Used</option>
              </select>
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="number_of_pages">Number of Pages</label>
              <input
                type="text"
                name="number_of_pages"
                id="number_of_pages"
                placeholder="1001"
                value={book.number_of_pages}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="language">Language</label>
              <input
                type="text"
                name="language"
                id="language"
                placeholder="English"
                value={book.language}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>

            <h3 className="text-slate-400 mt-6">AUTHOR</h3>
            <hr />
            {authors.map((author, index) => (
              <div key={author.id} className="flex flex-col mt-3 gap-2">
                <label htmlFor={`author_${author.id}`}>Author {index + 1}</label>
                <input
                  type="text"
                  name={`author_${author.id}`}
                  id={`author_${author.id}`}
                  placeholder="Author Name"
                  value={author.name}
                  onChange={(e) => handleAuthorInputChange(author.id, e.target.value)}
                  className="px-4 py-2 border border-slate-200 rounded-md"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addAuthorField}
              className="flex items-center gap-2 mt-3 text-blue-600"
            >
              <IoPersonAdd />
              Add Author
            </button>

            <h3 className="text-slate-400 mt-6">PUBLICATION</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="publication_date">Publication Date</label>
              <input
                type="date"
                name="publication_date"
                id="publication_date"
                value={book.publication_date}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="edition">Edition</label>
              <input
                type="text"
                name="edition"
                id="edition"
                placeholder="First"
                value={book.edition}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="publication_name">Publication Name</label>
              <input
                type="text"
                name="publication_name"
                id="publication_name"
                placeholder="HarperCollins"
                value={book.publication_name}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="name_of_publisher">Name of Publisher</label>
              <input
                type="text"
                name="name_of_publisher"
                id="name_of_publisher"
                placeholder="John Doe"
                value={book.name_of_publisher}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="place_of_publication">Place of Publication</label>
              <input
                type="text"
                name="place_of_publication"
                id="place_of_publication"
                placeholder="New York"
                value={book.place_of_publication}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>

            <h3 className="text-slate-400 mt-6">ISBN</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="isbn_number">ISBN Number</label>
              <input
                type="text"
                name="isbn_number"
                id="isbn_number"
                placeholder="123-4567890123"
                value={book.isbn_number}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="classification_number">Classification Number</label>
              <input
                type="text"
                name="classification_number"
                id="classification_number"
                placeholder="QA76.73.J38"
                value={book.classification_number}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="book_number">Book Number</label>
              <input
                type="text"
                name="book_number"
                id="book_number"
                placeholder="10"
                value={book.book_number}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>

            <h3 className="text-slate-400 mt-6">SCANNER</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="scanner_type">Scanner Type</label>
              <select
                name="scanner_type"
                id="scanner_type"
                value={book.scanner_type}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              >
                <option value="">Select Scanner Type</option>
                <option value="Type1">Type1</option>
                <option value="Type2">Type2</option>
                <option value="Type3">Type3</option>
              </select>
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="barcode_number">Barcode Number</label>
              <input
                type="text"
                name="barcode_number"
                id="barcode_number"
                placeholder="1234567890123"
                value={book.barcode_number}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>

            <h3 className="text-slate-400 mt-6">LOCATION</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="book_location">Book Location</label>
              <input
                type="text"
                name="book_location"
                id="book_location"
                placeholder="Shelf 5"
                value={book.book_location}
                onChange={handleInputChange}
                className="px-4 py-2 border border-slate-200 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Register Book
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/3 flex flex-col items-center mt-20">
        <img src={bookCover} alt="Book Cover" className="w-48 object-cover rounded-md" />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-4 cursor-pointer" />
      </div>
      <ToastContainer />
    </div>
  );
}
