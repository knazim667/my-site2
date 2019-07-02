import React, { Fragment, useState } from "react";
import { Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import Button from "./Button/Button";
import { setAlert } from "../actions/alert";
import { register } from '../actions/auth';
import PropTypes from "prop-types";
import Alert from "./Alert";

const RegisterArea = ({setAlert, register, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password Doesn't Match", "danger");
    } else {
      register({ name, email, password });
    }



  };
  
  if (isAuthenticated) {
    return <Redirect to="/login" />
  }
  
  return (
    <Fragment>
      <section className="register-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={require("../assets/images/1.png")} alt="contact-img" />
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>Register Here</h2>
                  <div className="bar" />
                </div>
              </div>
              <Alert />
              <form id="registerForm" onSubmit={e => onSubmit(e)}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        data-error="Please enter your name"
                        placeholder="Name"
                        value={name}
                        onChange={e => onChange(e)}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        data-error="Please enter your email"
                        placeholder="Email"
                        value={email}
                        onChange={e => onChange(e)}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        name="password2"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <Button btnType="btn-primary">Register</Button>
                  </div>
                </div>
                {/* {this.successMessage()} */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

RegisterArea.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated : PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(RegisterArea);
