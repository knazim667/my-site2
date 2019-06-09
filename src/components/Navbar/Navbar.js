// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
class Navbar extends Component {

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <header id="header">
                <div id="navbar" className={["mn-nav", ] }>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-">
                            <Link className= "navbar-brand"to="/">
                                <Logo />
                            </Link>

                            <button
                            onClick={this.toggleNavbar}
                            className={classTwo}
                            type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                                >
                                <span><i className="fas fa-bars"></i></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav nav ml-auto">
                                    <li className="nav-item">
                                        <Link className={["nav-link", "active"]} to="/about">
                                          Me
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className={["nav-link", "active"]} to="/about">
                                           Work
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className={["nav-link", "active"]} to="/about">
                                           Blog
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className={["nav-link", "active"]} to="/about">
                                           Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-option">
                                <Link to="#">
                                    <Button btnType="btn-light">Register</Button>
                                </Link>
                                <Link to="#">
                                    <Button btnType="btn-primary">Login</Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}
export default Navbar;