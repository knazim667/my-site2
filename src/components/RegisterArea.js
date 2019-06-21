import React from 'react';
import Button from './Button/Button';

export default function RegisterArea() {
    return (
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
								<div className="bar"></div>
                            </div>
                        </div>
                                <form 
                                    id="registerForm" 
                                    // onSubmit={this.onSubmit}
                                >
                                    <div className="row">
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    className="form-control" 
                                                    required 
                                                    data-error="Please enter your name" 
                                                    placeholder="Name" 
                                                    // value={this.state.formFields.email}
                                                    // onChange={this.emailChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    className="form-control" 
                                                    required 
                                                    data-error="Please enter your email" 
                                                    placeholder="Email" 
                                                    // value={this.state.formFields.email}
                                                    // onChange={this.emailChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="password"
                                                    name="password" 
                                                    className="form-control" 
                                                    placeholder="Password" 
                                                    // value={this.state.formFields.phone}
                                                    // onChange={this.phoneChangeHandler}
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
    )
}
