import React, { useState, useEffect, Fragment } from 'react';
// import Product from "./Product";
import Title from "../components/Title";
import { storeProducts } from "../data";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = () => {
      setProducts(storeProducts);
    }
    getData();
  }, []);
  

  return (
    <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products" />
          <div className="row">

          </div>
        </div>
      </div>
    </Fragment>
    // <Product />
  );
}

export default ProductList;