import React, { useState } from "react";
import BookCover from "../../assets/th (1).jpeg";
import { IoArrowBackCircle, IoPersonAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function BookRegistration() {
  const [book, setBook] = useState({
    title: "",
    sub_title: "",
    description: "",
    genre: "",
    status: "",
    number_of_pages: "",
    language: "",
    author: "",
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
      const response = await fetch("http://127.0.0.1:8000/api/book/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Register successful!");
        setTimeout(() => navigate(`/LibraryRequestPage`), 2000); // Redirect after 2 seconds
      } else {
        toast.error(
          data.message || "Register failed. Please check your credentials."
        );
        console.log(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error); // Log the error for debugging
      toast.error("An error occurred. Please try again later.");
    }
  };

  const navigate = useNavigate();
  const [bookCover, setBookCover] = useState(BookCover);

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

  const [authors, setAuthors] = useState([{ id: 1, name: "" }]);

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
            <h3 className="text-slate-400">TITLE</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                placeholder="After Dark"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="sub_title">Sub Title</label>
              <input
                type="text"
                name="sub_title"
                placeholder="Arise Dawn"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.sub_title}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                placeholder="Arise Dawn"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.description}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-slate-400 mt-6">TYPE</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="genre">Genre</label>
              <select
                id="genre"
                name="genre"
                className="w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                value={book.genre}
                onChange={handleInputChange}
              >
                <option value="">Select Genre</option>
                <option value="BSc">BSc</option>
                <option value="BBA">BBA</option>
                <option value="ACCA">ACCA</option>
              </select>
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                className="w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                value={book.status}
                onChange={handleInputChange}
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
                placeholder="1001"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.number_of_pages}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="language">Language</label>
              <input
                type="text"
                name="language"
                placeholder="English"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.language}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-slate-400 mt-6">AUTHOR</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label>Author</label>
              <div>
                {authors.map((author, index) => (
                  <div key={author.id} className="flex gap-3 items-center mb-3">
                    <input
                      type="text"
                      placeholder={`Author ${index + 1}`}
                      className="border-2 w-2/3 pl-3 py-1 rounded-md"
                      value={author.name}
                      onChange={(e) =>
                        handleAuthorInputChange(author.id, e.target.value)
                      }
                    />
                    {index === authors.length - 1 && (
                      <IoPersonAdd
                        className="h-6 w-6 cursor-pointer"
                        onClick={addAuthorField}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-slate-400 mt-6">PUBLICATION</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="publication_date">Publication Date</label>
              <input
                type="date"
                name="publication_date"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.publication_date}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="edition">Edition</label>
              <input
                type="text"
                name="edition"
                placeholder="1st"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.edition}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="publication_name">Publication Name</label>
              <input
                type="text"
                name="publication_name"
                placeholder="Dawn"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.publication_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="name_of_publisher">Name of Publisher</label>
              <input
                type="text"
                name="name_of_publisher"
                placeholder="Publisher Name"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.name_of_publisher}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="place_of_publication">Place of Publication</label>
              <input
                type="text"
                name="place_of_publication"
                placeholder="New York"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.place_of_publication}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-slate-400 mt-6">ISBN</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="isbn_number">ISBN Number</label>
              <input
                type="text"
                name="isbn_number"
                placeholder="978-3-16-148410-0"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.isbn_number}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-slate-400 mt-6">CLASSIFICATION NUMBER</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="classification_number">Classification Number</label>
              <input
                type="text"
                name="classification_number"
                placeholder="QA76.73.J38"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.classification_number}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-slate-400 mt-6">BOOK NUMBER</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="book_number">Book Number</label>
              <input
                type="text"
                name="book_number"
                placeholder="123456"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.book_number}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-slate-400 mt-6">SCANNER</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="scanner_type">Scanner Type</label>
              <input
                type="text"
                name="scanner_type"
                placeholder="Barcode"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.scanner_type}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-slate-400 mt-6">BARCODE</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="barcode_number">Barcode Number</label>
              <input
                type="text"
                name="barcode_number"
                placeholder="123456789012"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.barcode_number}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-slate-400 mt-6">LOCATION</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="book_location">Book Location</label>
              <input
                type="text"
                name="book_location"
                placeholder="A1"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.book_location}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-1/3 flex flex-col items-center">
        <img src={bookCover} alt="Book Cover" className="w-48 h-64 object-cover rounded-md" />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-4" />
      </div>

      <ToastContainer />
    </div>
  );
}
