import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";
import './navbar.css'

const contato = {
  pathname: "/contato"
};
const blog = {
  pathname: "/blog"
};
const sobrePath = {
  pathname: "/sobre"
};
const homePath = {
  pathname: "/"
};

class Navbar extends Component {
  componentDidMount() {
    const elem = document.querySelector(".sidenav");
    const instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });

    instance.close();
  }

  render() {
    return (
      <div id="nav-container" className='navbar-fixed'>
        <nav>
          <div className="nav-wrapper container">
            <a href="./" className="brand-logo left">
              Logo
            </a>
            <button
              data-target="slide-out"
              className="sidenav-trigger right sidenav-button hide-on-large-only"
            >
              <i className="material-icons">menu</i>
            </button>

            <ul className="right hide-on-med-and-down">
              <li>
                <Link to={homePath} className="font-nav style-button">
                  Home
                </Link>
              </li>
              <li>
                <Link to={sobrePath} className="font-nav style-button">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to={blog} className="font-nav style-button">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={contato} className="font-nav style-button">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="slide-out">
          <li>
            <Link to={homePath} className="font-nav style-button sidenav-close">
              <i className="small material-icons">home</i>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={sobrePath}
              className="font-nav style-button sidenav-close"
            >
              <i className="small material-icons">face</i>
              Nossa História
            </Link>
          </li>
          <li>
            <Link to={blog} className="font-nav style-button sidenav-close">
              <i className="small material-icons">library_books</i>
              Blog
            </Link>
          </li>
          <li>
            <Link to={contato} className="font-nav style-button sidenav-close">
              <i className="small material-icons">message</i>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
