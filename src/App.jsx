import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import "./App.css";
import Articles from "./pages/ArticlesPage";
import ArticlePage from "./pages/ArticlePage";
import { UserProvider } from "./context/UserContext";
import Error from "./component/Error";


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <main className="main-container">
            <Header />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="/articles/topics/:topic" element={<Articles/>}/>
            <Route path="/*" element={<Error message={'Route not found!'}/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
