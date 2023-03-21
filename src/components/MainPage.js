import React, { useState } from 'react';

import Form from './Form.js';
import AppPage from './MainPage.js';
import Products from './Products.js';


const AppPage = () => {

  const [details, setdetails] = useState(false);
const [products, setproducts] = useState(false);

  const NavLOD = () => {
    console.log(' Deals Click works');
    setdetails(true)
    setproducts(false)
  };

  const NavLOP = () => {
    console.log(' Products Click works');
    setdetails(false)
    setproducts(true)
  };

  return (
    <body>
      <h4>Click Below Link to View the List of Products</h4>
      <div onClick={NavLOP}>List of Products</div>

      <h4>Click Below Link to View the List of Deals</h4>
      <div onClick={NavLOD}>List of Deals</div>
      <br></br>
      <hr></hr>
      {details ? <Form></Form> : <></>}
      {products ? <Products></Products> : <></>}
    </body>
  );
};

export default AppPage;
