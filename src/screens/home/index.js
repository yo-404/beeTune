import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Favorites from "../favorites";
import Feed from "../feed";
import Library from "../library";
import Player from "../player";
import Trending from "../trending";
import "./home.css";
import Login from "../auth/login";

export default function Home() {

  

  return (
    <Router>
      <div className="main-body">
        <Login/>
        {/* <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes> */}
      </div>
    </Router>
  );
}
