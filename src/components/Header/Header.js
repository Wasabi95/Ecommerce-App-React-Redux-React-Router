import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = ({ cartLength }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
      <NavLink className="navbar-brand" to="/">
    <img
      src="https://raw.githubusercontent.com/Wasabi95/NavBar-SideMenu/master/images/cc.png"
      alt="Logo"
      className="logo-image"
    />
    My Online Store
  </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                <i className="fa fa-shopping-cart mr-2" aria-hidden="true" /> Cart{' '}
                {cartLength ? `(${cartLength})` : ''}
              </NavLink>
            </li>
            {/* Add a Login NavLink */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cartLength: state.shop.cart.length,
  };
};

export default connect(mapStateToProps, null)(Header);


