import React, { useState } from "react";
import BookCover from "../../assets/th (1).jpeg";
import { IoArrowBackCircle, IoPersonAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { bookRegister } from "../../utils/Api"; // Make sure to import the API function

export default function BookRegistration() {
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
    add_author: "", // Changed to string to store single author name
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
      const response = await bookRegister(
        book.classification_number,
        book.book_number,
        book.title,
        book.sub_title,
        book.edition,
        book.number_of_pages,
        book.language,
        book.genre,
        book.book_location,
        book.description,
        // book.cover_pic, // Make sure to handle the cover pic file upload properly
        book.publication_date,
        book.publication_name,
        book.name_of_publisher,
        book.place_of_publication,
        book.add_author, // Ensure this is handled correctly for multiple authors
        book.scanner_type,
        book.barcode_number,
        book.isbn_number
      );

      if (response.status === 200) {
        toast.success("Register successful!");
        setTimeout(() => navigate(`/librarian-books`), 2000); // Redirect after 2 seconds
      } else {
        toast.error(
          response.data.message || "Register failed. Please check your credentials."
        );
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
        setBook({ ...book, cover_pic: file }); // Save the file object for upload
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
    const firstAuthorName = updatedAuthors[0]?.name || "";
    setBook({ ...book, add_author: firstAuthorName }); // Save only the first author's name
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
                        className="cursor-pointer h-7 w-7"
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
                type="text"
                name="publication_date"
                placeholder="1998"
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
                placeholder="First"
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
                placeholder="Wiley"
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
                placeholder="Hamlyn"
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
                placeholder="USA"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.place_of_publication}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-slate-400 mt-6">BARCODE</h3>
            <hr />
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="isbn_number">ISBN Number</label>
              <input
                type="text"
                name="isbn_number"
                placeholder="12345"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.isbn_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="classification_number">Classification Number</label>
              <input
                type="text"
                name="classification_number"
                placeholder="12345"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.classification_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="book_number">Book Number</label>
              <input
                type="text"
                name="book_number"
                placeholder="101"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.book_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="scanner_type">Scanner Type</label>
              <input
                type="text"
                name="scanner_type"
                placeholder="Bar Code"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.scanner_type}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="barcode_number">Barcode Number</label>
              <input
                type="text"
                name="barcode_number"
                placeholder="4512432"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.barcode_number}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col mt-3 gap-2">
              <label htmlFor="book_location">Book Location</label>
              <input
                type="text"
                name="book_location"
                placeholder="USA"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                value={book.book_location}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <button
                type="submit"
                className="w-2/3 text-center bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
      <div className="w-1/3 p-10">
        <div className="p-8 mt-16 bg-slate-50 shadow-md flex flex-col justify-center items-center border">
          <img
            className="w-2/3 object-cover object-center rounded-lg mb-4 shadow-md"
            src={bookCover}
            alt="Book Cover"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border rounded p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
}
