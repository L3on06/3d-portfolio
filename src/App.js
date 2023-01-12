import React from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';

export default function App() {

  return (
    <div className='main'>
      <Spline className='spline fade-in' scene="https://prod.spline.design/dJEYQluapHYSl852/scene.splinecode" />
      <Spline className='spline fade-in' scene="https://prod.spline.design/v91dMYjNvVfWmhsD/scene.splinecode" />
    </div>
  );
}


