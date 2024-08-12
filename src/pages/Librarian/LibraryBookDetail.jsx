import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import DefaultProfile from "../../assets/pcps_logo.jpg";
import BackComp from "../../components/BackComp";

const LibraryBookDetail = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [bookInfo, setBookInfo] = useState({

        cover_pic: "",
        ISBN_number: "8765419873546",
        title: "Python",
        author: "Griffin",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis Lorem ipsum dolor sit amet consectetu adipisicing elit. Harum et voluptates ullam laborum voluptatem!    Incidunt expedita suscipit, sed voluptatem, temporibus iste      excepturi voluptatum velit delectus laboriosam explicabo.       Assumenda, nemo numquam? Fugit soluta debitis odit cumque fuga       pariatur nihil commodi, molestias suscipit, eius eum nisi  doloremque quisquam consequatur.",

    });

    const [bookHistory, setbookHistory] = useState([
        {
            fullName: "Sudarshan",
            checkoutDate: "2024/08/22",
            dueDate: "2024/08/30 ",
            checkIn: "",
            amount: "69"
        },
    ]);


    const location = useLocation();

    useEffect(() => {
        // setbookHistory([]);




    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookInfo({
            ...bookInfo,
            [name]: value,
        });
    };

    const handleSaveClick = async () => {
        const saveData = async () => {
            console.log("Saving data...", bookInfo);
            // Add save logic here
        };

        await saveData();
        setIsEditing(false);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    return (
        <div className="bg-primary w-full h-full text-white">
            <ToastContainer />
            <div className="w-full h-16 bg-secondary flex items-center justify-center text-3xl text-black font-semibold p-4 relative">
                Book Details
                <BackComp />
            </div>
            <div className="flex w-full p-4">
                <div className="bg-white text-black p-4 rounded-lg shadow-lg w-1/4">

                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-3">Book Information</h3>
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <img
                                    src={bookInfo.cover_pic || DefaultProfile}
                                    alt="Profile"
                                    className="w-40 h-56 object-cover rounded-xl shadow-md"
                                />
                            </div>
                            <div className="flex items-center w-auto bg-green-500 rounded-md p-1 mt-2">
                                {bookInfo.status}
                            </div>
                            <div className="mt-5">
                                <div className="mb-4">
                                    <span className="text-gray-600 font-medium">ISBN:</span>{" "}
                                    <span className="text-gray-800">{bookInfo.ISBN_number}</span>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{bookInfo.title} </h1>
                                <p className="text-lg text-gray-700 mb-4">
                                    by: <span className="text-blue-500"> {bookInfo.author} </span>
                                </p>
                                <p className="text-gray-700 mb-4 text-justify">
                                    {bookInfo.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full gap-4">
                            <button
                                className="border rounded-xl mt-3 bg-black text-white text-center h-10 w-1/2"
                                onClick={handleEditClick}
                            >
                                Edit
                            </button>
                            <button
                                className="border rounded-xl mt-3 bg-black text-white text-center h-10 w-1/2"
                                onClick={handleSaveClick}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-3/4 p-4">
                    <div className="flex flex-col w-full p-4 bg-white text-black rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">Book History</h3>
                        <div className=" overflow-scroll md:overflow-auto border rounded-sm">
                            {/* Book Borrowed Table */}
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Check Out Date
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Due Date
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Check In Date
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Fine
                                        </th>
                                    </tr>
                                </thead>
                                {bookHistory.length === 0 ? (
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td colSpan={4} className="text-center md:py-32">
                                                Member have not borrowed this books
                                            </td>
                                        </tr>
                                    </tbody>
                                ) : (
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {bookHistory.map((book, index) => (
                                            <tr key={index} className="hover:bg-gray-100">
                                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {book.fullName}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                    {book.checkoutDate}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                    {book.dueDate}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                    {book.checkIn}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                    {book.amount}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                )}
                            </table>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default LibraryBookDetail;
