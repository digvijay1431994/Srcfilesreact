import React, { useEffect, useState } from 'react'
import Header1 from '../Component/Header1'
import {NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../Component/Footer'
import axios from 'axios'
function Login() {

    const redirect=useNavigate();

    useEffect(()=>{
        if((localStorage.getItem('uid')))
        {
            redirect('/');
        }
    })
    
    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {

        var result = true;
        if (formvalue.email == "") {
            toast.error('email Field is required !');
            result = false;
            
        }
        if (formvalue.password == "") {
            toast.error('password Field is required !');
            result = false;
            
        }

        return result;
    }


    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    if (res.data[0].status == "Unblock") {

                        // session create
                        localStorage.setItem('uid',res.data[0].id);
                        localStorage.setItem('uname',res.data[0].name);    
                        toast.success("Login Suucees!");
                        redirect('/');
                    }
                    else {
                        toast.error("Account Blocked!");
                    }
                }
                else {
                    toast.error("Password incorrect !");
                }
            }
            else {
                toast.error("Email does not exist !");
            }
        }
    }

  return (
    <div>
        <Header1 title="Login Here"/>
            {/* Contact Start */}
            < div className="container-fluid py-5" >
                <div className="container py-5">
                    <div className="row">
                    <img className="position-absolute w-100 h-100" src="website/img/header.jpg" style={{ objectFit: 'cover' }} />
                        <div className="col-lg-6" style={{ marginBottom: 90 }}>
                        
                            <div className="position-relative h-100">
                                <iframe className="position-absolute w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            
                            <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Login</h6>
                                <h1 className="mb-4">Login Here</h1>
                                <div id="success" />
                                <form action="" method='post' onSubmit={submitHandel}>
                                    <div className="form-row">
                                        
                                        <div className="col-sm-12 control-group">
                                            <input type="email" className="form-control border-0 p-4" id="email" name="email"   value={formvalue.email} onChange={changeHandel}placeholder="Your Email" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" id="password" name="password"   value={formvalue.password} onChange={changeHandel} placeholder="Your Password"/>
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Login</button>
                                        <NavLink to='/signup' className='float-right'>If you not registered then Signup Here</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Contact End */}
       <Footer/>
    </div>
  )
}

export default Login
