import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="product-container">
      <h2>List of Products</h2>
      <div className="product">
        <img
          className="product-image"
          src="./cromeproduct.jpg"
          alt="Chrome product"
        />
        <p>
          Chrome is a web browser launched by Google. It is one of the top most
          used websites in the world.
        </p>
      </div>
      <div className="product">
        <img
          className="product-image"
          src="./fileproduct.jpg"
          alt="Files product"
        />
        <p>
          Files app can be downloaded for free from web browsers like Internet
          Explorer and can be used for an unlimited time.
        </p>
      </div>
      <div className="product">
        <img
          className="product-image"
          src="./mailproduct.jpg"
          alt="Mail product"
        />
        <p>
          Mail app can be downloaded from the Internet Explorer app tool. It is
          basically used to check daily emails and gives a compact way to access
          emails.
        </p>
      </div>
      <div className="product">
        <img
          className="product-image"
          src="./appstoreproduct.jpg"
          alt="App store product"
        />
        <p>
          App store is a Microsoft inbuilt app store which has several
          applications available to download for free.
        </p>
      </div>
      <div className="product">
        <img
          className="product-image"
          src="./search.jpg"
          alt="Search product"
        />
        <p>
          Search is a web browser feature that allows users to find specific
          information on the internet.
        </p>
      </div>
      <div className="product">
        <img
          className="product-image"
          src="./window.jpg"
          alt="Windows product"
        />
        <p>
          Windows is an operating system developed by Microsoft. It has several
          versions like 10, 11, 11 Pro, etc. Windows software can be purchased
          online and can be tried for free before purchasing.
        </p>
      </div>
    </div>
  );
};

export default Products;
