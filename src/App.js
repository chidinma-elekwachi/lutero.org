import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Premium from "./pages/Premium";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Privacy from "./pages/Privacy";
import DataDeletion from "./pages/DataDeletion";
import AppAds from "./app-ads.txt";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/premium" element={<Premium />} /> */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
        <Route path="/*" element={<Home />} />
        <Route path="/app-ads.txt" element={<AppAds />} />
      </Routes>
    </Router>
  );
}

export default App;
