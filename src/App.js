import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import NavBar from "./components/Nav";
import EmptyPage from "./routes/EmptyPage";
import Home from "./routes/Home";
import VotingPage from "./routes/VotingPage";
import AboutPage from "./routes/AboutPage";
import "./index.css";

const Navbar = () => {

  return (
    <nav>
      <NavBar />
      <Outlet /> {/* Renders the matched child component */}
    </nav>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="example2" element={<EmptyPage />} />
        <Route path="/VotingPage" element={<VotingPage />} />
        <Route path="about" element={<AboutPage />} />


      </Route>
    </Routes>
  );
};

export default App;
