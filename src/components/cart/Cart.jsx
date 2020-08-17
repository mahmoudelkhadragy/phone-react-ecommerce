import React, { Component, Fragment } from 'react';
import Title from "../Title";
import CartColumn from "../cart/CartColumn";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <Title name="Your" title="cart" />
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </Fragment>
              )
            } else {
              return (
                <EmptyCart />
              )
            }
          }}
        </ProductConsumer>

      </section>
    );
  }
}

export default Cart;