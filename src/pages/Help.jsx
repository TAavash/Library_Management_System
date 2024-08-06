import React, { useState } from "react";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import NavNew from "../components/NavNew";
import { sendcontact } from "../utils/Api";
import { ToastContainer, toast } from "react-toastify";
import Libimage from "../assets/hamrolibrary.jpg"

const Help = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const validateFields = () => {
    const newErrors = {};
    if (!subject) newErrors.subject = "Subject is required.";
    if (!message) newErrors.message = "Message is required.";
    return Object.keys(newErrors).length === 0;
  };

  const handleContact = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    const user_id = localStorage.getItem("user_id");
    try {
      let contact = await sendcontact(subject, message, user_id);
      if (contact) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Message failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="p-[20px]">
          {/* FAQ Section */}
          <div className="flex flex-col md:flex-row h-auto mt-[50px] rounded-2xl bg-white shadow-slate-500 shadow-md overflow-hidden">
            <div className="md:h-auto w-full md:w-[300px] bg-[#14273D]">
              <div className="flex gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoIosHelpCircle className="fill-[#A3A3A3] text-3xl" />
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-[40px] hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]">
                  FAQ's
                </button>
              </div>
            </div>
            <div className="w-full h-full bg-white rounded-2xl">
              <div className="w-full h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex p-[10px]">
                  <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-full text-start text-2xl font-bold">
                      Frequently Asked Questions
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div className="flex flex-col gap-[20px] my-2">
                  <div className="gap-3 flex flex-col">
                    <div className="font-bold text-lg">
                      Q1. What is the Library Management System app?
                    </div>
                    <div className="text-base text-gray-700">
                      Ans.The Library Management System app is a digital tool
                      designed to help libraries manage their collections,
                      users, and transactions efficiently. It includes features
                      for cataloging books, tracking loans and returns, managing
                      user accounts, and generating reports.
                    </div>
                    <div className="font-bold text-lg">
                      Q2. How do I get started with the app?
                    </div>
                    <div className="text-base text-gray-700">
                      Ans. To get started, download the app from the app store
                      or access it via your web browser. Create an account, log
                      in, and follow the setup wizard to configure your
                      library's settings and add your collection.
                    </div>
                    <div className="font-bold text-lg">
                      Q3. How do I create a new user account?
                    </div>
                    <div className="text-base text-gray-700">
                      Ans. Go to the "User Management" section in the app, click
                      on "Add User," and fill in the required information such
                      as name, email, and user role. Save the details to create
                      the account.
                    </div>
                    <div className="font-bold text-lg">
                      Q4. What should I do if I forget my password?
                    </div>
                    <div className="text-base text-gray-700">
                      Ans. Click on the "Forgot Password" link on the login
                      page, enter your registered email address, and follow the
                      instructions sent to your email to reset your password.
                    </div>
                    <div className="font-bold text-lg">
                      Q5. How do I add a new book to the catalog?
                    </div>
                    <div className="text-base text-gray-700">
                      Ans. Navigate to the "Catalog Management" section, click
                      on "Add Book," and fill in the book's details such as
                      title, author, ISBN, genre, and publication year. Save the
                      entry to add the book to the catalog.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* Contact Administrator Section */}
<div className="flex flex-col md:flex-row h-auto mt-[50px] rounded-2xl bg-white shadow-slate-500 shadow-md overflow-hidden">
  <div className="md:h-auto w-full md:w-[300px] bg-[#14273D] relative">
    <img 
      src={Libimage}
      alt="Background" 
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-[#14273D] bg-opacity-75 flex flex-col justify-center items-center">
      <div className="flex gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
        <IoMail className="fill-[#A3A3A3] text-3xl" />
      </div>
      <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
        <button className="h-[40px] hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]">
          Contact Administrator
        </button>
      </div>
    </div>
  </div>
  <div className="w-full h-full bg-white rounded-2xl p-8">
    <div className="flex flex-col gap-10">
      <h2 className="text-2xl font-bold text-center">Contact Administrator</h2>
      <form onSubmit={handleContact} className="flex flex-col gap-6">
        <div className="relative flex items-center">
          <IoIosHelpCircle className="absolute left-4 text-xl text-gray-500" />
          <input
            type="text"
            className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Subject"
            id="subject"
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
        </div>
        <div className="relative flex items-center">
          <IoIosHelpCircle className="absolute left-4 text-xl text-gray-500" />
          <textarea
            className="w-full h-32 pl-12 pr-4 pt-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Message"
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <button
          type="submit"
          className="self-center bg-blue-500 text-white w-32 h-10 rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>


        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Help;