import React, { useState } from "react";
import BookCover from "../../assets/th (1).jpeg";
import { IoPersonAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  bookRegister,
  publicationRegister,
  barcodeRegister,
  uploadCoverPic,
} from "../../utils/Api";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

function BookRegistration() {
  const [isPublicationRegistered, setIsPublicationRegistered] = useState(false);
  const [isbookRegistered, setbookRegistered] = useState(false);
  const [isbarkcodeRegistered, setbarcodeRegistered] = useState(false);
  const handleComplete = () => {
    console.log("Form completed!");
    handleCoverPicUpload();
  };
  const tabChanged = ({ prevIndex, nextIndex }) => {
    // console.log("", prevIndex, nextIndex)
    if (prevIndex === 1 && !isPublicationRegistered) {
      handlepublicationregister();
    } else if (prevIndex === 2 && !isbookRegistered) {
      handlebookregister();
    } else if (prevIndex === 3 && !isbarkcodeRegistered) {
      handlebarcoderegister();
    }
  };
  const [publications_idS, setpublications_idS] = useState();
  const [books_idS, setbooks_idS] = useState();
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
    add_author: "",
  });

  // const [bookCover, setBookCover] = useState(BookCover);
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

  const handlebookregister = async (e) => {
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
        book.add_author,
        publications_idS
      );

      if (response) {
        console.log(response.data.books_id);
        toast.success("Book Registration successful!");
        setbooks_idS(response.data.books_id);
        setbookRegistered(true);
        // setTimeout(() => navigate("/librarian-books"), 2000);
      } else {
        toast.error(
          response.data.message ||
            "Register failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handlepublicationregister = async (e) => {
    // if (!validateFields()) return;

    try {
      const response = await publicationRegister(
        book.publication_date,
        book.publication_name,
        book.name_of_publisher,
        book.place_of_publication
      );
      if (response.status === 201) {
        toast.success("Publication Registration successful!");
        setpublications_idS(response.data.publications.publications_idS);
        setIsPublicationRegistered(true);
        // setTimeout(() => navigate("/librarian-books"), 2000);
      } else {
        toast.error(
          response.data.message ||
            "Register failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  let status = "Active";

  const handlebarcoderegister = async (e) => {
    try {
      const response = await barcodeRegister(
        book.scanner_type,
        book.barcode_number,
        book.isbn_number,
        status,
        books_idS
      );
      console.log(books_idS);

      if (response) {
        toast.success("Barcode Registration successful!");
        setbarcodeRegistered(true);
        // setTimeout(() => navigate("/librarian-books"), 2000);
      } else {
        toast.error(
          response.data.message ||
            "Register failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const navigate = useNavigate();
  const [bookCover, setBookCover] = useState(BookCover);
  const [newcoverPic, setNewCoverPic] = useState(null);

  const handleCoverPicUpload = async () => {
    try {

      // Save the profile picture if a new one is uploaded
      if (newcoverPic && books_idS) {
        await uploadCoverPic(books_idS, newcoverPic);
        setBookCover(book.cover_pic || BookCover);
      }
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("An error occurred while saving profile data:", error);
      toast.error("An error occurred while saving profile data. Please try again.");
    }
  };
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBookCover(reader.result);
        setNewCoverPic(file); // Store the file for uploading later
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
    const firstAuthorName = updatedAuthors[0]?.name || "";
    setBook({ ...book, add_author: firstAuthorName });
  };

  return (
    <>
      <FormWizard
        shape="circle"
        color="#14273D"
        onComplete={handleComplete}
        onTabChange={tabChanged}
      >
        <FormWizard.TabContent title="Publication" icon="ti-user">
          <form onSubmit={handlepublicationregister} className="space-y-6">
            <div className="text-start w-[80%] m-auto">
              <h3 className=" text-slate-400 text-lg font-semibold mt-6">
                PUBLICATION
              </h3>
              <hr />
              <div className="flex flex-col gap-3 mt-3">
                <label className="font-medium" htmlFor="publication_date">
                  Publication Date
                </label>
                <input
                  type="text"
                  name="publication_date"
                  placeholder="1998"
                  className="border-2 p-2 rounded-md"
                  value={book.publication_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <label className="font-medium" htmlFor="edition">
                  Edition
                </label>
                <input
                  type="text"
                  name="edition"
                  placeholder="First"
                  className="border-2 p-2 rounded-md"
                  value={book.edition}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <label className="font-medium" htmlFor="publication_name">
                  Publication Name
                </label>
                <input
                  type="text"
                  name="publication_name"
                  placeholder="Wiley"
                  className="border-2 p-2 rounded-md"
                  value={book.publication_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <label className="font-medium" htmlFor="name_of_publisher">
                  Name of Publisher
                </label>
                <input
                  type="text"
                  name="name_of_publisher"
                  placeholder="Hamlyn"
                  className="border-2 p-2 rounded-md"
                  value={book.name_of_publisher}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <label className="font-medium" htmlFor="place_of_publication">
                  Place of Publication
                </label>
                <input
                  type="text"
                  name="place_of_publication"
                  placeholder="USA"
                  className="border-2 p-2 rounded-md"
                  value={book.place_of_publication}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Book" icon="ti-settings">
          <form onSubmit={handlebookregister} className="space-y-6">
            <div className="text-start w-[80%] m-auto">
              <h3 className="text-slate-400 text-lg font-semibold">TITLE</h3>
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="After Dark"
                    className="border-2 p-2 rounded-md"
                    value={book.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="sub_title">
                    Sub Title
                  </label>
                  <input
                    type="text"
                    name="sub_title"
                    placeholder="Arise Dawn"
                    className="border-2 p-2 rounded-md"
                    value={book.sub_title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="description">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Description here"
                  className="border-2 p-2 rounded-md"
                  value={book.description}
                  onChange={handleInputChange}
                />
              </div>

              <h3 className="text-slate-400 text-lg font-semibold mt-6">
                AUTHOR
              </h3>
              <hr />
              <div className="flex flex-col gap-3 mt-3">
                <label className="font-medium">Author</label>
                {authors.map((author, index) => (
                  <div
                    key={author.id}
                    className="flex flex-col md:flex-row gap-3 items-center"
                  >
                    <input
                      type="text"
                      placeholder={`Author ${index + 1}`}
                      className="border-2 p-2 rounded-md w-full md:w-2/3"
                      value={author.name}
                      onChange={(e) =>
                        handleAuthorInputChange(author.id, e.target.value)
                      }
                    />
                    {index === authors.length - 1 && (
                      <IoPersonAdd
                        className="cursor-pointer text-xl mt-2 md:mt-0"
                        onClick={addAuthorField}
                      />
                    )}
                  </div>
                ))}
              </div>

              <h3 className="text-slate-400 text-lg font-semibold mt-6">
                TYPE
              </h3>
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="genre">
                    Genre
                  </label>
                  <select
                    id="genre"
                    name="genre"
                    className="border-2 p-2 rounded-md mb-4"
                    value={book.genre}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Genre</option>
                    <option value="General Collection">
                      General Collection
                    </option>
                    <option value="Textbook">Textbook</option>
                    <option value="Reference">Reference</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="status">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="border-2 p-2 rounded-md mb-4"
                    value={book.status}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Status</option>
                    <option value="New">New</option>
                    <option value="Old">Old</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="number_of_pages">
                    Number of Pages
                  </label>
                  <input
                    type="text"
                    name="number_of_pages"
                    placeholder="1001"
                    className="border-2 p-2 rounded-md mb-4"
                    value={book.number_of_pages}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="language">
                    Language
                  </label>
                  <input
                    type="text"
                    name="language"
                    placeholder="English"
                    className="border-2 p-2 rounded-md mb-4"
                    value={book.language}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    className="font-medium"
                    htmlFor="classification_number"
                  >
                    Classification Number
                  </label>
                  <input
                    type="text"
                    name="classification_number"
                    placeholder="12345"
                    className="border-2 p-2 rounded-md mb-4"
                    value={book.classification_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="book_number">
                    Book Number
                  </label>
                  <input
                    type="text"
                    name="book_number"
                    placeholder="101"
                    className="border-2 p-2 rounded-md mb-4"
                    value={book.book_number}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="book_location">
                  Book Location
                </label>
                <input
                  type="text"
                  name="book_location"
                  placeholder="USA"
                  className="border-2 p-2 rounded-md mb-4"
                  value={book.book_location}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Barcode Info" icon="ti-settings">
          <form onSubmit={handlebarcoderegister} className="space-y-6">
            <div className="text-start w-[80%] m-auto">
              <h3 className="text-slate-400 text-lg font-semibold mt-6">
                BARCODE
              </h3>
              <hr />
              <div className="flex flex-col gap-3 mt-3">
                <label className="font-medium" htmlFor="isbn_number">
                  ISBN Number
                </label>
                <input
                  type="text"
                  name="isbn_number"
                  placeholder="12345"
                  className="border-2 p-2 rounded-md"
                  value={book.isbn_number}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <label className="font-medium" htmlFor="scanner_type">
                  Scanner Type
                </label>
                <input
                  type="text"
                  name="scanner_type"
                  placeholder="Bar Code"
                  className="border-2 p-2 rounded-md"
                  value={book.scanner_type}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <label className="font-medium" htmlFor="barcode_number">
                  Barcode Number
                </label>
                <input
                  type="text"
                  name="barcode_number"
                  placeholder="4512432"
                  className="border-2 p-2 rounded-md"
                  value={book.barcode_number}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Cover Image" icon="ti-check">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex justify-center items-center p-10">
              <div className="bg-slate-50 shadow-md flex flex-col items-center p-8 rounded-lg border">
                <img
                  className="w-full md:w-64 lg:w-80 object-cover object-center rounded-lg mb-4 shadow-md"
                  src={bookCover}
                  alt="Book Cover"
                />
                <input
                  type="file"
                  accept=".jpeg,.png,.jpg,.gif,.svg"
                  onChange={handleImageUpload}
                  className="border rounded p-2"
                />
              </div>
            </div>
          </form>
        </FormWizard.TabContent>
      </FormWizard>
      <ToastContainer />
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}

export default BookRegistration;
