import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from '../components/admin/sidebar/Sidebar';
import Topbar from '../components/admin/topbar/Topbar';
import Home from '../pages/admin/home/Home';
import NewUser from '../pages/admin/newUser/NewUser';
import Product from '../pages/admin/product/Product';
import ProductList from '../pages/admin/productList/ProductList';
import User from '../pages/admin/user/User';
import UserList from '../pages/admin/userList/UserList';

export const AdminRoute = () => {
  return (
    <>
      <div>
        <Topbar />

        <div className='container'>
         <Sidebar />

          <Switch>
            <Route exact path="/admin">
              <Home />
            </Route>
            <Route path="/admin/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/admin/products">
              <ProductList />
            </Route>
            <Route path="/admin/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              {/* <NewProduct /> */}
            </Route>

            <Redirect to="/admin" />
          </Switch>
        </div>
      </div>
    </>
  );
}
