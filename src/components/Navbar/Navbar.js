import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header id="header">
      <div id="navbar" className={["mn-nav"]}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-">
            <Link className="navbar-brand" to="/">
              <Logo />
            </Link>

            <button
              onClick={() => setCollapsed(false)}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="fas fa-bars" />
              </span>
            </button>

            <Fragment>
              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav nav ml-auto">
                  <li className="nav-item">
                    <Link
                      className={
                        window.location.pathname === "/"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={
                        window.location.pathname === "/about"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/about"
                    >
                      About Me
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={
                        window.location.pathname === "/projects"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/projects"
                    >
                      Projects
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={
                        window.location.pathname === "/posts"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/posts"
                    >
                      Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={
                        window.location.pathname === "/contact"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="others-option">
                  {isAuthenticated ? (
                    <Link onClick={logout} to="/">
                      <Button btnType="btn-primary">Logout</Button>
                    </Link>
                  ) : (
                    <Link to="/register">
                      <Button btnType="btn-light">Register</Button>
                    </Link>
                  )}

                  <Link to="/login">
                    <Button btnType="btn-primary">Login</Button>
                  </Link>
                </div>
              </div>
            </Fragment>
          </nav>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
