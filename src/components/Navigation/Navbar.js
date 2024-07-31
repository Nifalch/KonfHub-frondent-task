import React from "react";
import './Navbar.css';
import logo from "../../assets/logo.svg"

const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
             <img src={logo} alt="Knofhub Logo"/>
            </a>
            <a className="navbar-profile">
                <i class="bi bi-person" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
    );
};

export default Navbar;