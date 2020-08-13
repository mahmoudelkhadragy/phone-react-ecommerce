import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
// import logo from './logo.svg';
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
      {/* <h1>hello Ecommerce</h1> */}
      {/* <i className="fab fa-apple"></i> */}
    </div>
  );
}

export default App;