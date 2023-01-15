import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';
import Pagination from './Pagination';


export default function App() {
  const [page, setPage] = useState(1);
  const prevPage = useRef(0);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    // eslint-disable-next-line
  }, []);

  const handleWheel = (e) => {

    window.removeEventListener("wheel", handleWheel);


    if (e.deltaY < 0) {
      // Scroll Up
      if (prevPage.current > 0) {
        prevPage.current -= 1;
        setPage(prevPage.current + 1);
      }
    }
    else if (e.deltaY > 0) {
      // Scoll Down
      if (prevPage.current < 1) {
        prevPage.current += 1;
        setPage(prevPage.current + 1);
      }
    }

    setTimeout(() => {
      window.addEventListener("wheel", handleWheel);
    }, 2000);
  };

  const handlePageChange = (index) => {
    setPage(index);
  }


  return (
    <div className='main'>
      {page === 1 && (
        <Spline className='spline fade-in' scene="https://prod.spline.design/dJEYQluapHYSl852/scene.splinecode" />
      )}
      {page === 2 && (
        <Spline className='spline fade-in' scene="https://prod.spline.design/v91dMYjNvVfWmhsD/scene.splinecode" />
      )}
      <Pagination activePage={page} setActivePage={handlePageChange} />
    </div>
  );
}


