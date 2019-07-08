import React, { Fragment, useState } from "react";
import { addContact } from "../actions/contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../actions/alert";
import Alert from "./Alert";

const ContactBody = ({ setAlert, addContact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { name, email, phone, subject, message } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addContact({ name, email, phone, subject, message });
  };

  return (
    <Fragment>
      <section className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch With Me</h2>
            <div className="bar" />
            <p>Anything On your Mind. I’ll Be Glad To Assist You!</p>
          </div>

          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={require("../assets/images/1.png")} alt="contact-img" />
            </div>

            <div className="col-lg-6 col-md-12">
              <Alert />
              <form id="contactForm" onSubmit={e => onSubmit(e)}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
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
                        type="number"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        value={phone}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={subject}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="5"
                        placeholder="Your Message"
                        value={message}
                        onChange={e => onChange(e)}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>

                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
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
ContactBody.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, addContact }
)(ContactBody);
