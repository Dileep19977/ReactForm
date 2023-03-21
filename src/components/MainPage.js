import React from 'react';
import Form from './Form.js';
import Products from './Products.js';

const MainPage = () => {
  const NavLOD = () => {
    return <Form></Form>;
  };

  const NavLOP = () => {
    return <Products></Products>;
  };

  return (
    <body>
      <h1>Click Below Link to View the List of Products</h1>
      <div onClick={NavLOP}>List of Products</div>

      <h1>Click Below Link to View the List of Deals</h1>
      <div onClick={NavLOD}>List of Deals</div>
    </body>
  );
};

export default MainPage;
