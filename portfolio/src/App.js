import React, { useState } from 'react';
import './App.css';
import NAV from './components/NAV';
import Footer from './components/Footer';
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'


function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  return (
    <div className='vh-100'>
    <NAV currentPage={currentPage} handlePageChange={handlePageChange}/>
    {renderPage()}
    <Footer/>
    </div>
  );
}

export default App;
