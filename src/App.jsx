import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Modal from "./components/Modal";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={ProductList} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </div>
  );
}

export default App;