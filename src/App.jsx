import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import "./App.css";
import Home from "./pages/Homepage";
import ArticlePage from "./pages/ArticlePage";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <main>
          <section className="fixed-elements-container">
            <Header />
            <Navbar />
          </section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
