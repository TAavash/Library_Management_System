import React, { useState } from "react";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import NavNew from "../../../components/NavNew";
import { sendcontact } from "../../../utils/Api";
import { ToastContainer, toast } from "react-toastify";

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
    if (!validateFields()) return; // Only proceed if validation passes
    const user_id = localStorage.getItem("user_id");
    try {
      let contact = await sendcontact(subject, message, user_id);
      if (contact) {
        toast.success("Message send successfully!");
      } else {
        toast.error("Message failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred:", error); // Log the error for debugging
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="p-[20px] ">
          <div className="flex h-[300px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[300px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoIosHelpCircle className=" fill-[#A3A3A3] text-3xl" />
              </div>
              <div className="flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-[40px] text-white rounded-xl text-2xl p-[2px] px-[3px]">
                  FAQ's
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex p-[10px]">
                  <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-full text-start text-2xl">
                      Frequently Asked Questions
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div className=" flex flex-col gap-[30px] my-2">
                  <div className="gap-3 flex flex-col">
                    <div className="font-bold">
                      Q1. What is the Library Management System app?
                    </div>
                    <div>
                      Ans.The Library Management System app is a digital tool
                      designed to help libraries manage their collections,
                      users, and transactions efficiently. It includes features
                      for cataloging books, tracking loans and returns, managing
                      user accounts, and generating reports.
                    </div>
                    <div className="font-bold">
                      Q2. How do I get started with the app?
                    </div>
                    <div>
                      Ans. To get started, download the app from the app store
                      or access it via your web browser. Create an account, log
                      in, and follow the setup wizard to configure your
                      library's settings and add your collection.
                    </div>
                    <div className="font-bold">
                      Q3. How do I create a new user account?
                    </div>
                    <div>
                      Ans. Go to the "User Management" section in the app, click
                      on "Add User," and fill in the required information such
                      as name, email, and user role. Save the details to create
                      the account.
                    </div>
                    <div className="font-bold">
                      Q4. What should I do if I forget my password?
                    </div>
                    <div>
                      Ans. Click on the "Forgot Password" link on the login
                      page, enter your registered email address, and follow the
                      instructions sent to your email to reset your password.
                    </div>
                    <div className="font-bold">
                      Q5. How do I add a new book to the catalog?
                    </div>
                    <div>
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
          <div className="flex h-[400px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[400px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoMail className=" fill-[#A3A3A3]  text-3xl" />
              </div>
              <div className="flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-[40px] text-white rounded-xl text-2xl p-[2px] px-[3px]">
                  Contact Administrator
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="flex-col h-[100%] p-[30px] gap-[30px] bg-white rounded-r-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div className=" flex flex-col gap-[30px] my-2">
                  <div className="flex flex-col">
                    <form action="" onSubmit={handleContact}>
                      <div className="flex flex-col gap-10 items-center">
                        <div className="relative w-fit mx-auto flex items-center rounded-[10px] border-2 border-[#A3A3A3]">
                          <input
                            type="text"
                            className=" max-w-[800px] rounded-[10px] h-[50px] pl-[50px]"
                            placeholder="Subject"
                            id="subject"
                            name="subject"
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                          />
                          <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                            <IoIosHelpCircle />
                          </div>
                        </div>
                        <div className="relative w-fit mx-auto flex items-center justify-start rounded-[10px] border-2 border-[#A3A3A3]">
                          <input
                            type="text"
                            className=" max-w-[800px] rounded-[10px] h-[150px] pl-[50px]"
                            placeholder="Message"
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                          />
                          <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                            <IoIosHelpCircle />
                          </div>
                        </div>
                        <div className="relative w-fit mx-auto flex items-center justify-start">
                          <button
                            type="submit"
                            className="bg-black text-white w-[100px] h-[30px] rounded-[5px] active:bg-slate-600"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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
