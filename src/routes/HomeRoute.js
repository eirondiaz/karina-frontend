import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";

export const HomeRoute = () => {
  return (
    <>
      <div>
        <Announcement />
        <Navbar />

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/product/:id" component={Product} />

          <Redirect to="/home" />
        </Switch>

        <Newsletter/>
        <Footer/>
      </div>
    </>
  );
};
