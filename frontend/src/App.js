import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import CreateCategory from "./components/category/create.component";
import EditCategory from "./components/category/edit.component";
import categoryIndex from "./components/category/index.component";

import productCreate from "./components/product/create.component";
import productEdit from "./components/product/edit.component";
import productIndex from "./components/product/index.component";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              EBG Admin Panel
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/category/create"} className="nav-link">
                    NewCategory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/category/index"} className="nav-link">
                    ListCategory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/product/create"} className="nav-link">
                    NewProduct
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/product/index"} className="nav-link">
                    ListProduct
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {" "}
          <br/>
          <h2>EBG Admin Panel</h2> <br/>
          <Switch>
            <Route exact path="/category/create" component={CreateCategory}/>
            <Route path="/category/edit/:id" component={EditCategory}/>
            <Route path="/category/index" component={categoryIndex}/>
            <Route exact path="/product/create" component={productCreate}/>
            <Route path="/product/edit/:id" component={productEdit}/>
            <Route path="/product/index" component={productIndex}/>
          </Switch>
        </div>
      </Router>
    );
  }
}