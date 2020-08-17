import React from 'react';
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "../styledComponents/Button";

const Details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, title, img, company, info, price, inCart } = value.detailProduct;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
              <h1>{title}</h1>
            </div>
            {/* end title */}
            {/* product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img className="img-fluid" src={img} alt="product" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model : {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>price : <span>$</span> {price}</strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
                </p>
                <p className="text-muted lead">
                  {info}
                </p>
                {/* buttons */}
                <Link to="/">
                  <ButtonContainer>
                    back to products
                  </ButtonContainer>
                </Link>
                <ButtonContainer
                  cart
                  disabled={inCart ? true : false}
                  onClick={() => { value.addToCart(id) }}
                >
                  {inCart ? "inCart" : "add to cart"}
                </ButtonContainer>
              </div>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  );
}

export default Details;