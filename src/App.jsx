import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom"
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import './App.css'
import Home from "./pages/Homepage";
import ArticlePage from "./pages/ArticlePage";


function App() {

  return (
    
    <BrowserRouter>
    <div>
    <section className="fixed-elements-container">
    <Header/>
    <Navbar />
    </section>
    <Routes>
    <Route path='/' element = {<Home />}  />
    <Route path='/articles/:articleId' element={<ArticlePage />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
