import React, {Fragment, useState } from 'react';
import Button from './Button/Button';
import axios from 'axios';


const RegisterArea = () => {

    const [formData , setFormData ] = useState({
        name : '',
        email : '',
        password : ''
    });

    const {name, email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value});
    const onSubmit = async e => {
        e.preventDefault();
        console.log(formData);

        const newUser = {
            name,
            email,
            password,
        };

        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };

            const body = JSON.stringify(newUser);

            const res = await axios.post('https://fast-bastion-48125.herokuapp.com/api/users', body, config);
            console.log(res.data);
        } catch (err) {
            console.log(err.response.data);
        }
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
								<div className="bar"></div>
                            </div>
                        </div>
                                <form 
                                    id="registerForm" 
                                    onSubmit={e => onSubmit(e)}
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
                                                    value={name}
                                                    onChange={e => onChange(e)}
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
    )
}

export default RegisterArea;