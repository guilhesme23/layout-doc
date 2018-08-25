import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";
import './navbar.css'

const contato = {
  pathname: "/"
};
const blog = {
  pathname: "/"
};
const sobrePath = {
  pathname: "/"
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

    const elems2 = document.querySelectorAll(".dropdown-trigger");
    const instance2 = M.Dropdown.init(elems2, {
      hover: false,
      alignment: "center",
      constrainWidth: true
    });
    instance.close();
  }

  render() {
    return <div id="nav-container" className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <a href="./" className="brand-logo left">
              Logo
            </a>
            <button data-target="slide-out" className="sidenav-trigger right sidenav-button hide-on-large-only">
              <i className="material-icons">menu</i>
            </button>

            <ul className="right hide-on-med-and-down">
              <li>
                <Link to={homePath}>Home</Link>
              </li>
              <li>
                <Link to={sobrePath}>Link 1</Link>
              </li>
              <li>
                <Link to={blog}>Link 2</Link>
              </li>
            <li data-target="dropdown1" className='dropdown-trigger'>
              <Link to={contato}>Link 3<i class="material-icons right tiny">arrow_drop_down</i></Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li><a href="#!">three</a></li>
        </ul>
        <ul className="sidenav" id="slide-out">
          <li>
            <Link to={homePath} className="font-nav style-button sidenav-close">
              Home
            </Link>
          </li>
          <li>
            <Link to={sobrePath} className="font-nav style-button sidenav-close">
              Link 1
            </Link>
          </li>
          <li>
            <Link to={blog} className="font-nav style-button sidenav-close">
              Link 2
            </Link>
          </li>
          <li>
            <Link to={contato} className="font-nav style-button sidenav-close">
              Link 3
            </Link>
          </li>
        </ul>
      </div>;
  }
}

export default Navbar;
