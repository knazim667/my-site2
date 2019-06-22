import React, { Fragment, useState} from 'react';
import Button from './Button/Button';

const LoginArea = () => {

    const [formData, setFormData] = useState({
        email : '',
        password : ''
    })

    const { email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value });

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <Fragment>
        <section className="login-area ptb-80">
            <div className="container">
                

                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <img src={require("../assets/images/1.png")} alt="contact-img" />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
							<div className="section-title">
								<h2>Login Here</h2>
								<div className="bar"></div>
                            </div>
                        </div>
                                <form 
                                    id="loginForm" 
                                    onSubmit={e => onSubmit(e)}
                                >
                                    <div className="row">
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    className="form-control" 
                                                    required 
                                                    data-error="Please enter your email" 
                                                    placeholder="Email" 
                                                    value={email}
                                                   onChange={e => onChange(e)}
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
                                                    value={password}
                                                    onChange={e => onChange(e)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <Button btnType="btn-primary">Login</Button>
                                        </div>
                                    </div>
                                    {/* {this.successMessage()} */}
                                </form>
                            </div>
                </div>
            </div>

        </section>
        </Fragment>
    )
}

export default LoginArea;