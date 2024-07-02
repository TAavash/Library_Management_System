import React from "react";
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
import { LibrarianDashboard } from "./pages/Librarian/LibrarianDashboard";
import { MemberDetail } from "./pages/Librarian/MemberDetail";


const App = () => {
  return (
    <div className="min-w-full">
      <MemberDetail />
      {/* <div className="fixed"><Header /></div>
      <Navbar/>
      <div>
        <LibrarianDash />
      </div>
      <div className="z-20">
        <FlipCard />
      </div> */}
    </div>
  );
};

export default App;
