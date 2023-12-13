import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import "./App.css";
import Home from "./pages/Homepage";
import ArticlePage from "./pages/ArticlePage";
import { UserProvider } from "./context/UserContext";
import ChosenTopic from "./pages/ChosenTopicPage";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <main className="main-container">
            <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="/articles/topics/:topic" element={<ChosenTopic/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
