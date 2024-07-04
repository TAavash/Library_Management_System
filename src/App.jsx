import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Card from "./components/Cards";
import FlipCard from "./components/FlipCard";
import NavbarComp from "./components/NavbarComp";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BookFlip from "./components/BookFlip";
import LibrarianDash from "./pages/LibrarianDash";
import Header from "./components/Header";
import LibrarianDashboard  from "./pages/Librarian/LibrarianDashboard";
import { MemberDetail } from "./pages/Librarian/MemberDetail";
import BookRegistration from "./pages/Librarian/BookRegistration";
import MemberRegistration from "./pages/Librarian/MemberRegistration";
import LibraryRequestPage from "./pages/Librarian/Patrons/Request/LibraryRequestPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibrarianDashboard />} />
        <Route path="/MemberDetail" element={<MemberDetail />} />
        <Route path="/BookRegistration" element={<BookRegistration />} />
        <Route path="/MemberRegistration" element={<MemberRegistration />} />
        <Route path="/LibraryRequestPage" element={<LibraryRequestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
