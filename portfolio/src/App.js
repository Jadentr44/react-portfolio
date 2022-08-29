import React, { useState } from 'react';
import './App.css';
import NAV from './components/NAV';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
    <NAV currentPage={currentPage} handlePageChange={handlePageChange}/>
    <Body/>
    <Footer/>
    </>
  );
}

export default App;
