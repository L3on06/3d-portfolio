import React, { useState } from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';
import Pagination from './Pagination';


export default function App() {
  const [page, setPage] = useState(1);

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


